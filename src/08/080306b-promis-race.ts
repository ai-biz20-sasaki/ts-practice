import { readFile } from "fs/promises";

//3つのPromiseがすべて成功したら
const p = Promise.race([
  readFile("./dist/08/080306a-foo.txt", "utf8"),
  readFile("./dist/08/080306a-bar.txt", "utf8"),
  readFile("./dist/08/080306a-baz.txt", "utf8")
]);

p.then((result) => {
  console.log(result);
});
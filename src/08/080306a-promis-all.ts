import { readFile } from "fs/promises";

//3つのPromiseがすべて成功したら
const p = Promise.all([
  readFile("./dist/08/080306a-foo.txt", "utf8"),
  readFile("./dist/08/080306a-bar.txt", "utf8"),
  readFile("./dist/08/080306a-baz.txt", "utf8")
]);

p.then((results) => {
  const [foo, bar, baz] = results;
  console.log("foo.txt", foo);
  console.log("bar.txt", bar);
  console.log("baz.txt", baz);
});
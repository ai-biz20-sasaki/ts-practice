import { readFile } from "fs/promises";

const p = readFile("./dist/08/080301a-foo.txt", "utf8");

p.then((data) => {
  console.log(data);
});

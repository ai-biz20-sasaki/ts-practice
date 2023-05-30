import { readFile } from "fs/promises";

const p = readFile("./dist/08/080301a-foo.txt", "utf8");

p.then((result) => {
  console.log("1");
});
p.then((result) => {
  console.log("2");
});
p.then((result) => {
  console.log("3");
});

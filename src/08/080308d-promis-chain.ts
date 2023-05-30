import { readFile } from "fs/promises";

//Promiseチェーン
readFile("./dist/08/080306a-foo.txt", "utf8")
  .finally(() => {
    console.log("foo.txt is loaded?");
  })
  .catch(() => "")
  .then((result) => {
    console.log(result);
  });
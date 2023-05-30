import { readFile } from "fs/promises";

//Promiseチェーン
readFile("./dist/08/080306a-foo.txt", "utf8")
  .catch(() => "")
  .then((result) => {
    console.log(result);
  });
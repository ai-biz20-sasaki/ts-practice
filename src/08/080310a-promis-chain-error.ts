import { readFile } from "fs/promises";

const p1 = readFile("./dist/08/080306a-foo.txt", "utf8")
const p2 = p1.then((result) => {
  throw new Error("Error!!!");  //エラーを投げる。Promiseの失敗を引き起こす
});

p2.then((result) => { //これは呼び出されない
  console.log(result);
});

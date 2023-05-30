import { readFile } from "fs/promises";

const p = readFile("./dist/08/080306a-foo.txt", "utf8");

//p2はPromiseの失敗を成功に変換する
const p2 = p.catch(() => "");

p2.then((result) => {
  console.log(result);
});
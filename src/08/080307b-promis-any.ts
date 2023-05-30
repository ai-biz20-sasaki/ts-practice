import { readFile } from "fs/promises";

//自作のPromise 5秒経過するとエラー
const sleepReject = (duration: number) => {
  return new Promise<never>((resolve, reject) => {
    setTimeout(reject, duration);
  })
};

//2つのPromiseの成功したもののうち一番早い結果
const p = Promise.any([
  readFile("./dist/08/080306a-foo.txt", "utf8"),
  sleepReject(5000)
]);

p.then((result) => {
  console.log(result);
});
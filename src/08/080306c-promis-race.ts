import { readFile } from "fs/promises";

//自作のPromise 5秒経過するとエラー
const sleepReject = (duration: number) => {
  return new Promise<never>((resolve, reject) => {
    setTimeout(reject, duration);
  })
};

//2つのPromiseのうち最も早く成功または失敗したものの結果
const p = Promise.race([
  readFile("./dist/08/080306a-foo.txt", "utf8"),
  sleepReject(5000)
]);

p.then((result) => {
  console.log("成功",result);
}, (error: unknown) => {
  console.log("失敗",error);
});
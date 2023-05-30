import { readFile } from "fs/promises";

const sleepReject = (duration: number) => {
  return new Promise<never>((resolve, reject) => {
    setTimeout(reject, duration);
  })
};

const p = readFile("./dist/08/080306a-foo.txt", "utf8")
  .then(() => sleepReject(1000))
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log("エラーが発生しました！！！", err);
  });

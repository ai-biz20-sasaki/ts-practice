export {};  //ファイルをモジュールにする

type GetTimeFunc = () => Date;

function useTime(getTimeFunc: GetTimeFunc | undefined) {
  const timeStringOrUndefined = getTimeFunc?.().toString();  //関数呼び出しのオプショナルチェイニング
  console.log(timeStringOrUndefined);
}

const nowTime = function getTimeFunc(): Date {
  return new Date;
};
useTime(nowTime);
useTime(undefined);
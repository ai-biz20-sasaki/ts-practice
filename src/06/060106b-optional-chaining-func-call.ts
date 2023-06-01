export {};  //ファイルをモジュールにする

type GetTimeFunc = () => Date;

function useTime(getTimeFunc: GetTimeFunc | undefined) {
  const timeOrUndefined = getTimeFunc?.();  //関数呼び出しのオプショナルチェイニング
  console.log(timeOrUndefined);
}

const nowTime = function getTimeFunc(): Date {
  return new Date;
};
useTime(nowTime);
useTime(undefined);
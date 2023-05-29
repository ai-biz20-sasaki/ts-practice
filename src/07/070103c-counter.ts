//普通のエクスポートとdefaultエクスポートを併用できる
//普通のエクスポート
export let value =0;

//defaultエクスポート
export default function increment() {
  return ++value;
}
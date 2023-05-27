{
  //関数宣言より前でも関数を呼び出しできる。
  //関数宣言は巻き上げ(hoisting)される。
  //このように関数宣言によって作られた関数はスコープに入った時から存在していることになる
  console.log(range(5, 10));
  //関数宣言で関数を作る
  function range(min: number, max: number): number[] {
    const result = [];
    for (let i = min; i <= max; i++) {
      result.push(i);
    }
    return result;
  }
}

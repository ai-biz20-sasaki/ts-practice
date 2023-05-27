{
  //戻り値がない関数
  function helloWorldNTimes2(n: number): void{
    if (n >= 100) {
      console.log(`${n}回なんて無理です！！！`);
      //早期リターン(early return)
      return;
    }
    for (let i = 0; i < n; i++) {
      console.log("Hello, world!");
      //return文がなくてもOK
    }
  }

  helloWorldNTimes2(5);
  helloWorldNTimes2(150);
}
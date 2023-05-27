{
  //戻り値がない関数
  function helloWorldNTimes(n: number): void{
    for (let i = 0; i < n; i++) {
      console.log("Hello, world!");
      //return文がなくてもOK
    }
  }

  helloWorldNTimes(5);
}
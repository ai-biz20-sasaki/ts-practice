{
  const sleep = (duration: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, duration);
    });
  };

  async function  get3(): Promise<number> {
    console.log("2.get3が呼び出されました：同期処理")
    await sleep(1000);
    console.log("4.awaitの次に進みました：非同期処理")
    return 3;
  }

  console.log("1.get3を呼び出します：同期処理")
  const p = get3();
  p.then(num => {
    console.log(`num is ${num}`);
  });
  console.log("3.get3を呼び出しました：同期処理")
}
{
  async function  get3(): Promise<number> {
    console.log("2.get3が呼び出されました");
    return 3;
  }

  console.log("1.get3が呼び出します");
  const p = get3();
  p.then(num => {
    console.log(`num is ${num}`);
  });
  console.log("3.get3が呼び出しました");
}
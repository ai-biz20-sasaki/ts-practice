{
  async function main() { //async function宣言
    const { readFile, writeFile } = await import("fs/promises");

    try {
      const fooContent = await readFile("./dist/08/080403b-foo.txt", "utf8");
      //2倍にしてbar.txtに書き込む
      await writeFile("./dist/08/080403b-bar.txt", fooContent + fooContent);
      console.log("1.書き込み完了しました");
    } catch (error) {
      console.log("1.失敗しました");
    }
  }

  main().then(() => {
    console.log("2.main()が完了しました");
  });
}
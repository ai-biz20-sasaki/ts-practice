import("fs/promises")
  .then(({ readFile }) => 
    readFile("./dist/08/080306a-foo.txt", "utf8")
  )
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("エラーが発生しました！！！", error);
  });

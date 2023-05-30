import { readFile } from "fs/promises";

const p = readFile("./dist/08/080301a-foo.txt", "utf8");

//thenメソッドは成功時と失敗時の関数を同時に登録することもできる
//1つ目の引数は成功時の関数、2つ目は失敗時の関数を渡す
p.then((result) => {
  console.log("成功", result);
},(error: unknown) => { //any型は危険なので、unknown型に型注釈をつける
  console.log("失敗", error);
});

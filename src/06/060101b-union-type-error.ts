export {};  //ファイルをモジュールにする

type Human = {
  name: string;
  age?: number;
};

const uhyo: Human = {
  name: "uyho",
  age: 26
}

//Human.ageは型としては age?: number型として存在するが値がない
//コンパイルエラーでなくundefinedになる
const john: Human = {
  name: "John Smith"
};

console.log(john)
export {};  //ファイルをモジュールにする

type Human = {
  name: string;
  age: number | undefined;
};

const uhyo: Human = {
  name: "uhyo",
  age: 25
};

const john: Human = {
  name: "John Smith",
  age: undefined
};

/*
const taro: Human = { //age: number | undefined の場合、これはコンパイルエラーになる
  name: "Taro Yamada",
};
*/
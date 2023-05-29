//Animal型を定義する
type Animal = {
  species: string;
  age: number;
};

//Animal型の変数tamaを作成する
const tama: Animal = {
  species: "Felis silvestris catus",
  age: 1
};

//型と変数を混ぜてエクスポートする
export { Animal, tama };
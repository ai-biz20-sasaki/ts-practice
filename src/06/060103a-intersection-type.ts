export {};  //ファイルをモジュールにする

type Animal = {
  species: string;
  age: number;
};

//インターセクション型 HumanはAnimalの部分型
type Human = Animal & {
  name: string;
};

const tama: Animal = {
  species: "Felis silvestris catus",
  age: 3
}

const uhyo: Human = {
  species: "Homo sapiens sapiens",
  age: 26,
  name: "uyho",
}

console.log(uhyo);

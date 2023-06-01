export {};  //ファイルをモジュールにする

type Animal = {
  species: string;
};

//以下は構造的部分型において、ageプロパティを持つオブジェクトをAnimal型として扱うことができる
const cat = {
  species: "Felis silvestris catus",
  age: "永遠の17歳"
};

//上記によりAnimal型のオブジェクトだからといって、ageプロパティの値がないとは限らない
//したがって、型にない(age)プロパティについては、undefinedと決めつけることはできない
//型にないプロパティは実際にどうなっているか不明なので、cat.ageプロパティアクセスはコンパイルエラーになる
const animal: Animal = cat;
//animal.age = ""

console.log(animal)
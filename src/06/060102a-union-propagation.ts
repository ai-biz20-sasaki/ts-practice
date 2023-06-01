export {};  //ファイルをモジュールにする

type Animal = {
  species: string;
  age: string;
};

type Human = {
  name: string;
  age: number;
};

//ユニオン型
type User = Animal | Human;

const tama: User = {
  species: "Felis silvestris catus",
  age: "永遠の17歳"
}

const uhyo: User = {
  name: "uyho",
  age: 26
}

//変数ageの型は string | number型のユニオン型
function showAge(user: User) {
  const age = user.age;
  console.log(age);
}

showAge(tama);
showAge(uhyo);

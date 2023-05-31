export {};  //ファイルをモジュールにする

type Animal = {
  species: string;
};

type Human = {
  name: string;
};

//ユニオン型
type User = Animal | Human;

const tama: User = {
  species: "Felis silvestris catus"
}

const uhyo: User = {
  name: "uyho"
}

//以下はコンパイルエラー
/*
function getName(user: User): string {
  return user.name;
}
*/
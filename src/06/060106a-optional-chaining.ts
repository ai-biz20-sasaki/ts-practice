export {};  //ファイルをモジュールにする

type Human = {
  name: string;
  age: number;
};

function useMaybeHuman(human: Human | undefined) {
  const age = human?.age; //プロパティアクセスのオプショナルチェイニング
  console.log(age);
}

const uhyo: Human = {
  name: "uhyo",
  age: 25
};

useMaybeHuman(uhyo);
useMaybeHuman(undefined);

export {};  //ファイルをモジュールにする

type User = {
  isAdult(): boolean;
}

function checkForAdultUser(user: User | null) {
  if (user?.isAdult()) {  //メソッド呼び出しのオプショナルチェイニング
    //userが存在し、isAdult()がtrue
    console.log(user.isAdult());
  } else if (user?.isAdult() === false) {
    //userが存在し、isAdult()がtrue
    console.log(user.isAdult());
  } else {
    //userが存在しない
    console.log(user);
  }
}

const taro: User = {
  isAdult() {
    return true;
  }
}

const jiro: User = {
  isAdult() {
    return false;
  }
}

const hanako = null;

checkForAdultUser(taro);
checkForAdultUser(jiro);
checkForAdultUser(hanako);
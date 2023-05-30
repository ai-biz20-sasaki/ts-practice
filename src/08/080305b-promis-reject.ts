{
  const p = Promise.reject("foo");
  //下記のようにnew Promiseで同じ表現ができる
  //new Promise((resolve, reject) => { reject("foo");})

  p.catch((error) => {
    console.log(`result is ${error}`);
  });
}

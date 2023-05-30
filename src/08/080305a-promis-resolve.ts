{
  const p = Promise.resolve(100);
  //下記のようにnew Promiseで同じ表現ができる
  //new Promise((resolve) => { resolve(100);})

  p.then((result) => {
    console.log(`result is ${result}`);
  });
}

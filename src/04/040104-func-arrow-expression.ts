{
  type Human = {
    height: number;
    weight: number;
  };
  //アロー関数式(arrow function expression)で関数を作る
  const calcBMI = ({
    height, weight
  }: Human): number => {
    return weight / height **2;
  };
  
  const uhyo: Human = { height: 1.84, weight: 72};
  console.log(calcBMI(uhyo));
}

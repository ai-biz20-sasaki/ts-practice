{
  let counter: number = 0;
  let result: string = "";
  for (counter = 1; counter < 101; counter++) {
    if (((counter % 3) === 0) && ((counter % 5) === 0)) {
      result = result + "FizzBuzz";
    } else if ((counter % 3) === 0) {
      result = result + "Fizz";
    } else if ((counter % 5) === 0) {
      result = result + "Buzz";
    } else {
      result = result + counter.toString();
    }
    result = result + " ";
  }
  console.log(result);
}

function solve(num) {


  function calculator(input) {
    let x = input.toString();
    let sum = 0;

    for (let i = 0; i < x.length; i++) {
      sum += Number(x[i]);
    }
    let middle = sum / x.length;
    return middle;
  }

  

  while (calculator(num) <= 5) {
    num += '9';
  }
  console.log(typeof NaN);
}

solve(10);

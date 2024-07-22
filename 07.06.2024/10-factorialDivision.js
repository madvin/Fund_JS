function factorialDivision(num1, num2) {
  function refactor(n) {
    let fac = 1;
    for (let i = n; i > 1; i--) {
      fac *= i;
    }
    return fac;
  }

  let result = refactor(num1) / refactor(num2);
  console.log(result.toFixed(2));
}
factorialDivision(5, 2);

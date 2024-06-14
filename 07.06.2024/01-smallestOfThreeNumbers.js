function smallestNum(num1, num2, num3) {
  let smallestInt = 0;
  if (num1 <= num2 && num1 <= num3) {
    smallestInt = num1;
  } else if (num2 <= num1 && num2 <= num3) {
    smallestInt = num2;
  } else if (num3 <= num1 && num3 <= num2) {
    smallestInt = num3;
  }
  console.log(smallestInt);
}

smallestNum(11, 50, 190);

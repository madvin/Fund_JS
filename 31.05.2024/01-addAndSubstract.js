function addSubstract(arr) {
  let newArrSum = 0;
  let oldArrSum = 0;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i] + i);
    } else {
      newArr.push(arr[i] - i);
    }
    oldArrSum += arr[i];
    newArrSum += newArr[i];
  }
  console.log(newArr);
  console.log(oldArrSum);
  console.log(newArrSum);
}
addSubstract([5, 15, 23, 56, 35]);
addSubstract([-5, 11, 3, 0, 2]);

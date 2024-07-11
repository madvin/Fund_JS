function equalSums(arr) {
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      leftSum += Number(arr[j]);
    }

    for (let k = i + 1; k < arr.length; k++) {
      rightSum += Number(arr[k]);
    }

    if (leftSum === rightSum) {
      console.log(i);
      return;
    }
    leftSum = 0;
    rightSum = 0;
  }
  console.log('no');
}
equalSums([
  10, 5, 5, 99,

  3, 4, 2, 5, 1,

  1, 4,
]);

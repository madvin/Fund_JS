function magic(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      const newNum = arr[i] + arr[j];
      if (newNum === num) {
        console.log(arr[i], arr[j]);
      }
    }
  }
}

magic([1, 7, 6, 2, 19, 23], 8);

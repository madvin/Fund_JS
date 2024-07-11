function max(arr) {
  if (arr.length === 0) {
    console.log("");
    return;
  }

  let maxLength = 1;
  let maxElement = arr[0];
  let currentLength = 1;
  let currentElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === currentElement) {
      currentLength++;
    } else {
      if (currentLength > maxLength) {
        maxLength = currentLength;
        maxElement = currentElement;
      }
      currentElement = arr[i];
      currentLength = 1;
    }
  }

  if (currentLength > maxLength) {
    maxLength = currentLength;
    maxElement = currentElement;
  }

  const result = Array(maxLength).fill(maxElement);
  console.log(result.join(" "));
}

max([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);

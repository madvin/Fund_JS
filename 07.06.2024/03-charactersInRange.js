function charInRange(char1, char2) {
  let arr = [];
  const firstSimb = char1.charCodeAt();
  const secondSimb = char2.charCodeAt();
  if (firstSimb < secondSimb) {
    for (let i = firstSimb + 1; i < secondSimb; i++) {
    arr.push(String.fromCharCode(i));
    }
  } else {
    for (let i = secondSimb + 1; i < firstSimb; i++) {
      arr.push(String.fromCharCode(i));
    }
  }
  console.log(arr.join(' '))
}
charInRange("d", "a");

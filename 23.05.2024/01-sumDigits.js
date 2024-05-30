function sum(num) {
    let sumOfDigs = 0;
    let string = num + " ";
    for (let i = 0; i < string.length; i++) {
    let curDigit = Number(string[i]);
    sumOfDigs += curDigit;
    }
    console.log(sumOfDigs);
}
sum(245678)
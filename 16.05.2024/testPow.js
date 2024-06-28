// const x = "2b3Vjkn363j42bGDFSk32j46bk2346978DJM76423"
// const regex = /[A-z]/g;
// const y = x.replace(regex, "-");
// const regex2 = /[0-9]/g;
// const z = x.replace(regex2, ".");
// console.log(y);
// console.log(z);
const arr = [1,3,4,1,2,4,1,2,4,5,2,1,4,5,1,3,];
const z = arr.filter((x, index) => arr.indexOf(x) === index);
console.log(z);
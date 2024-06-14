function oddAndEvenSum(num) {
    let oddSum = 0;
    let evenSum = 0;
    function numString(string) {
        const stringedNum = string + '';
        return stringedNum;
    }
    let theNum = numString(num);
    for (let i = 0; i < theNum.length; i++) {
        const curNum = Number(theNum[i]);
        if (curNum % 2 === 0) {
            evenSum += curNum;
        } else {
            oddSum += curNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(3495892137259234)
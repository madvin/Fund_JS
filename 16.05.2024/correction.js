function triangleOfNumbers(n) {
    for (let curNum = 1; curNum <= n; curNum++) {
        let numberToDisplay = '';
        for (let numCount = 1; numCount <= curNum; numCount++) {
            numberToDisplay += curNum + ' ';
        }
        console.log(numberToDisplay);
    }
}
triangleOfNumbers(5)
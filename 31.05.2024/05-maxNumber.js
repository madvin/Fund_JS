function maxNumber(arr) {
    let resultArray = [];
    let biggestNum = Number.NEGATIVE_INFINITY;

    for (let i = arr.length; i >= 0; i--) {
        if (arr[i] > biggestNum) {
            resultArray.unshift(arr[i]);
            biggestNum = arr[i];
        }
    }
    console.log(resultArray.join(' '));
}

maxNumber([14, 24, 3, 19, 15, 17])
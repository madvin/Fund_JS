function mergeArrays(arr1, arr2) {
    let newArray = [];
    for (let i = 0; i < arr1.length; i++) {
        let el1 = arr1[i];
        let el2 = arr2[i];

        if (i % 2 === 0) {
            let sum = Number(el1) + Number(el2);
            newArray.push(sum);
        } else {
            let concatenation = arr1 + arr2;
            newArray.push(concatenation);
        }
    }
    console.log(newArray.push(' - '));
}
mergeArrays()
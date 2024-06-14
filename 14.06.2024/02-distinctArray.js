function distinct(arr) {
    let uniqueNums = [];
    for (const num of arr) {
        if (!uniqueNums.includes(num)) {
            uniqueNums.push();
        }
    }
    console.log(uniqueNums.join(' '));
}
distinct([7, 8, 9, 7, 2, 3, 4, 1, 2])
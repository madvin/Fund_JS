function sortBy2Criteria(arr) {
    const sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sortedArr.join('\n'));
}
sortBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])

function printAndSum(start, stop) {
    let sum = 0;
    let string = '';
    for (let i  =  start; i <= stop; i++) {
        sum += i;
        string += `${i} `
    }
    console.log(string);
    console.log(`Sum: ${sum}`);
}

printAndSum(448, 450);
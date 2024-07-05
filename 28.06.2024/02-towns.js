function towns(arr) {
    for (const townStr of arr) {

        const tokens = townStr.split(' | ');
        const town = tokens.shift();
        const latitude = Number(tokens.shift()).toFixed(2);
        const longitude = Number(tokens.shift()).toFixed(2);

        const curTown = {
            town,
            latitude,
            longitude
        }
        console.log(curTown);
    }
}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])
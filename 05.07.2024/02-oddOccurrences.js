function odd(str) {
    const resultedArr = new Map();
    const targets = str.split(' ').map(word => word.toLowerCase());


    for (const word of targets) {
        if (resultedArr.has(word)) {
            const currentOccurs = resultedArr.get(word);
            resultedArr.set(word, currentOccurs + 1);
        } else {
            resultedArr.set(word, 1)
        }
    }
    const wordEntries = resultedArr.entries();

    const validWords = [];

    for (const [word, occurencies] of wordEntries) {

        if (occurencies % 2 !== 0) {
            validWords.push(word);
        }
    }
    console.log(validWords.join(' '));
}


odd('Cake IS SWEET is Soft CAKE sweet Food')
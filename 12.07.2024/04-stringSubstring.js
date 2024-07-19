function stringSub(word, text) {
    const lowerCaseText = text.toLowerCase();
    const textWords = lowerCaseText.split(' ');

    if(textWords.includes(word)) {
        console.log(word)
    } else {
        console.log(`${word} not found!`);
    }
}
stringSub()
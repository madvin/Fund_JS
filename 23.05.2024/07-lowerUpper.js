function lowerOrUpper(input) {
    if (input === input.toUpperCase()) {
        console.log('upper-case');
    } else if (input === input.toLowerCase()) {
        console.log('lower-case');
    } else {
        console.log('not a letter');
    }
}

lowerOrUpper('a')
function ages(num) {
    if (num < 0) {
        console.log("out of bounds");
    } else if (num <= 2) {
        console.log("baby");
    } else if (num <= 12) {
        console.log("child");
    } else if (num <= 19) {
        console.log("teenager");
    } else if (num <= 65) {
        console.log("adult");
    } else {
        console.log("elder");
    }
}

ages(20)
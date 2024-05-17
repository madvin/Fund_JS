function division(num) {
    let arr = [10, 7, 6, 3, 2];
    for(i = 0; i < arr.length; i++) {
    if (num % arr[i] === 0) {
        console.log(`The number is divisible by ${arr[i]}`);
        return;
    }
}
    console.log("Not divisible")
}

division(10);
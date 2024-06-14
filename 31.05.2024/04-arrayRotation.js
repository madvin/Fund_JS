function arrayRotation(arr, totalRotations) {
    for (let curRotation = 1; curRotation <=  totalRotations; curRotation++) {
        let element = arr.shift();
        arr.push(element);
    }
    console.log(arr.join(" "));
}
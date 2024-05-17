function rounding(rounded, precision) {
    if (precision > 15) {
        precision = 15;
    }
    console.log(parseFloat(rounded.toFixed(precision)))
}

rounding(3.14142952059238532037502385, 22)
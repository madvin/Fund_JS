function passValidate(pass) {

    function lengthOfPass(pass) {
    if (pass.length < 6 && pass.length > 10) {
        console.log('Password must be between 6 and 10 characters');
        return false;
    } else {
        return true;
    }
}
    function passAlphaNumeral(num) {
        const pattern = /\w+/;
        if (pattern.test(pass)) {
            return true;
        } else {
            console.log('Password must consist only of letters and digits');
            return false;
        }
    }
    function digitsCheck(num) {
        let count = 0;
        for (const symbol of num) {
            const pattern = [/0-9/];
            const curSymb = symbol;
            if (curSymb.test(pattern)) {
                count++

            
                if (count >= 2){
                    return true;
                } else {
                    console.log('Password must have at least 2 digits');
                    return false;
                }
            }

        }
    }
    if (passAlphaNumeral && digitsCheck && lengthOfPass) {
        console.log('Password is valid')
    }
}
passValidate('login')
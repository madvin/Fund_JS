function carWash(arr) {
    let value = 0;
    function soap(x) {
        x += 10;
        return x;
    }
    function water(x) {
        x *= 1.2;
        return x;
    }
    function vacuum(x) {
        x *= 1.25;
        return x;
    }
    function mud(x) {
        x *= 0.9;
        return x;
    }

    for (const action of arr) {
        switch(action) {
            case 'soap': value = soap(value);
            break;
            case 'water': value = water(value);
            break;
            case 'vacuum cleaner': value = vacuum(value);
            break;
            case 'mud': value = mud(value);
            break;
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])

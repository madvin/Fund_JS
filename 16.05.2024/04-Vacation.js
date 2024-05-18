function vacation(group, type, day) {
    let price = 0;
    let totalPrice = 0;

    if (day === 'Friday') {
        switch (type) {
            case 'Students':
                price += group * 8.45;
                break;
            case 'Business':
                price += group * 10.9;
                break;
            case 'Regular':
                price += group * 8.45;
                break;
        }
    } else if (day === 'Saturday') {
        switch (type) {
            case 'Students':
                price += group * 9.8;
                break;
            case 'Business':
                price += group * 15.6;
                break;
            case 'Regular':
                price += group * 20;
                break;
        }
    } else if (day === 'Sunday') {
        switch (type) {
            case 'Students':
                price += group * 10.46;
                break;
            case 'Business':
                price += group * 16;
                break;
            case 'Regular':
                price += group * 22.5;
                break;
        }
    }
    if (type === 'Students' && group >= 30) {
        totalPrice += price * 0.85;
    } else if (type === 'Business' && group >= 100) {
        totalPrice += price - price * 10;
    } else if (type === 'Regular' && group >= 10 && group <= 20) {
        totalPrice += price * 0.95;
    } else {
        totalPrice = price;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

vacation([ 30,

"Students",

"Sunday"])
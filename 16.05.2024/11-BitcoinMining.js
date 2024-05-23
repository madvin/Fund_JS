function bitcoinMining(arr) {
    let days = 1;
    let bitcoinsBought = 0;
    let totalMoney = 0;
    let firsBitcoinDay = 0;


    for (let i = 0; i < arr.length; i++) {
        let gold = arr[i];
        if (days % 3 === 0) {
            gold *= 0.7;
        }
        let moneyFromGold = gold * 67.51;
        totalMoney += moneyFromGold;

        while (totalMoney >= 11949.16) {
            if (bitcoinsBought === 0) {
                firsBitcoinDay = days;
            }
            bitcoinsBought++;
            totalMoney -= 11949.16;
        }
        days++;

    }
    console.log(`Bought bitcoins: ${bitcoinsBought}`);
    if (bitcoinsBought > 0) {
        console.log(`Day of the first purchased bitcoin: ${firsBitcoinDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);

}

bitcoinMining([100, 200, 300])
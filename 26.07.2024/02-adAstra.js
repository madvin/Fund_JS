function adAstra(input) {
    const text = input[0];
    const pattern = /([#|])(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;

    let totalCalories = 0;
    const items = [];
    let match;

    while ((match = pattern.exec(text)) !== null) {
        const item = match.groups.item;
        const date = match.groups.date;
        const calories = Number(match.groups.calories);

        totalCalories += calories;

        items.push(`Item: ${item}, Best before: ${date}, Nutrition: ${calories}`);
    }

    const days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);

    items.forEach(item => {
        console.log(item);
    });
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
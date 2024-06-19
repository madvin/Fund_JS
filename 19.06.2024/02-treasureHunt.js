function treasure(arr) {
    let items = arr.shift().split('|');
    let command = arr.shift();
    let gainSum = 0;

    while (command !== 'Yohoho!') {
        let tokens = command.split(' ');
        const action = tokens.shift();

        switch (action) {
            case 'Loot':
            const newItems = tokens;
            for (const newItem of newItems) {
                if (!items.includes(newItems)) {
                    items.unshift(newItem);
                }
            }
            
            break;
            case 'Drop':
                const index = Number(tokens.shift());

                if (index >= 0 && index < items.length) {
                    const deletedItem = items.splice(index, 1)[0];
                    items.push(deletedItem);
                }
                break;
            case 'Steal':
                const countToDelete = Number(tokens.shift());
                const stolenItems = items.splice(-countToDelete);
                console.log(stolenItems.join(', '));
            break;
        }
        command = arr.shift();
    }
    

    if (items.length === 0) {
        console.log('Failed treasure hunt');
    } else {
        gainSum += items.length;
    }
    const averageGain = gainSum / items.length;
    console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits`);
}

treasure(["Gold|Silver|Bronze|Medallion|Cup",

"Loot Wood Gold Coins",

"Loot Silver Pistol",

"Drop 3",

"Steal 3",

"Yohoho!"])
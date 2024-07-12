function dungeon(arr) {
    const rooms = arr.split('|');
    let health = 100;
    let fortune = 0;
    let count = 1;
    for (let i = 0; i < rooms.length; i++) {
        const room = rooms[i].split(' ');
        const command = room[0];
        let value = Number(room[1]);
        if (command === 'potion') {
            if (health  + value > 100) {
                value = 100 - health;
            }
            
            health += value;
            console.log(`You healed for ${value} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            fortune += value;
            console.log(`You found ${value} coins.`);
        } else {
            let damage = value;
            health -= damage;
            if (health <= 0) {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${count}`);
                return;
            } else {
                console.log(`You slayed ${command}.`);
            }
        }
        count++;
    }
    console.log("You've made it!");
    console.log(`Coins: ${fortune}`);
    console.log(`Health: ${health}`);
}
dungeon("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
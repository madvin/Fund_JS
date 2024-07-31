function heroesOfCodeAndLogic(input) {
    let n = parseInt(input.shift());
    let heroes = {};

    for (let i = 0; i < n; i++) {
        let [name, hp, mp] = input.shift().split(' ');
        hp = parseInt(hp);
        mp = parseInt(mp);
        heroes[name] = { HP: hp, MP: mp };
    }

    while (input.length > 0) {
        let commandLine = input.shift();
        if (commandLine === "End") {
            break;
        }

        let [command, heroName, ...args] = commandLine.split(' - ');

        switch (command) {
            case 'CastSpell':
                let mpNeeded = parseInt(args[0]);
                let spellName = args[1];
                if (heroes[heroName].MP >= mpNeeded) {
                    heroes[heroName].MP -= mpNeeded;
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].MP} MP!`);
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                }
                break;

            case 'TakeDamage':
                let damage = parseInt(args[0]);
                let attacker = args[1];
                heroes[heroName].HP -= damage;
                if (heroes[heroName].HP > 0) {
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].HP} HP left!`);
                } else {
                    console.log(`${heroName} has been killed by ${attacker}!`);
                    delete heroes[heroName];
                }
                break;

            case 'Recharge':
                let amount = parseInt(args[0]);
                let oldMP = heroes[heroName].MP;
                heroes[heroName].MP = Math.min(200, heroes[heroName].MP + amount);
                console.log(`${heroName} recharged for ${heroes[heroName].MP - oldMP} MP!`);
                break;

            case 'Heal':
                let heal = parseInt(args[0]);
                let oldHP = heroes[heroName].HP;
                heroes[heroName].HP = Math.min(100, heroes[heroName].HP + heal);
                console.log(`${heroName} healed for ${heroes[heroName].HP - oldHP} HP!`);
                break;
        }
    }    
    for (let hero in heroes) {
        console.log(`${hero}`);
        console.log(`  HP: ${heroes[hero].HP}`);
        console.log(`  MP: ${heroes[hero].MP}`);
    }
}

heroesOfCodeAndLogic ([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);
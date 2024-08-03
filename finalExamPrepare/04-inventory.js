function solve(heroData) {
  let heroes = [];

  for (let data of heroData) {
    let [name, level, items] = data.split(" / ");
    level = Number(level);
    items = items ? items.split(", ") : [];

    heroes.push({ name, level, items });
  }

  heroes.sort((a, b) => a.level - b.level);

  for (let hero of heroes) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items.join(", ")}`);
  }
}

solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
//     Output:
//     Hero: Hes
//  level => 1
// items => Desolator, Sentinel, Antara
// Hero: Derek
// level => 12
// items => BarrelVest, DestructionSword
// Hero: Isacc
// level => 25
// items => Apple, GravityGun

// solve([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
//     ])

//      Output:
//     Hero: Batman
// level => 2
// items => Banana, Gun
// Hero: Superman
// level => 18
// items => Sword
// Hero: Poppy
// level => 28
// items => Sentinel, Antara

function solve(input) {
    let command = input.shift();
    let cityData = {}
    while (command !== 'Sail') {
        let city = command.split('||').shift();
        let population = Number(command.split('||')[1]);
        let gold = Number(command.split('||')[2]);
        
        if (city in cityData) {
            cityData[city].population += population;
            cityData[city].gold += gold;
        } else {
            cityData[city] = {population: population, gold: gold};
            
        }
 
        command = input.shift();
    }
    command = input.shift();
 
    while (command !== 'End') {
        let action = command.split('=>').shift();
 
 
        console.log(action);
        command = input.shift();
    }
    console.log(cityData);
}
 
 
solve(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    // "Sofia||1600000||680000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])
 
// Output:
// Gold added cannot be a negative number!
// Nassau plundered! 750 gold stolen, 94000 citizens killed.
// Nassau plundered! 150 gold stolen, 1000 citizens killed.
// Nassau has been wiped off the map!
// Campeche plundered! 690 gold stolen, 150000 citizens killed.
// Campeche has been wiped off the map!
// Ahoy, Captain! There are 2 wealthy settlements to go to:
// San Juan -> Population: 930000 citizens, Gold: 1250 kg
// Port Royal -> Population: 420000 citizens, Gold: 3000 kg
 
// solve(["Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"])
//Output:
//     Tortuga plundered! 380 gold stolen, 75000 citizens killed.
// 180 gold added to the city treasury. Santo Domingo now has 810 gold.
// Ahoy, Captain! There are 3 wealthy settlements to go to:
// Tortuga -> Population: 270000 citizens, Gold: 870 kg
// Santo Domingo -> Population: 240000 citizens, Gold: 810 kg
// Havana -> Population: 410000 citizens, Gold: 1100 kg

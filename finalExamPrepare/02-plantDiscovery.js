function solve(input) {
  let n = Number(input.shift());
  let plants = {};
  for (let i = 0; i < n; i++) {
    let line = input[i].split("<->");
    let plant = line.shift();
    let rarity = Number(line.shift());

    plants[plant] = {
      rarity: rarity,
      ratings: [],
    };
  }
  for (let j = n; j < input.length; j++) {
    let command = input[j];
    if (command === "Exhibition") {
      break;
    }
    let tokens = command.split(": ");
    let action = tokens[0];
    let status = tokens[1];
    let plant = status.split(" - ")[0];
    let value = Number(status.split(" - ")[1]);

    if (plants.hasOwnProperty(plant)) {
      switch (action) {
        case "Rate":
          let rating = Number(value);
          plants[plant].ratings.push(rating);
          break;
        case "Update":
          let newRarity = Number(value);
          plants[plant].rarity = newRarity;
          break;
        case "Reset":
          plants[plant].ratings = [];
          break;
        default:
          console.log("error");
          break;
      }
    } else {
      console.log("error");
    }
  }
  console.log("Plants for the exhibition:");

  let plantEntries = Object.entries(plants);
  for (let [plant, data] of plantEntries) {
    let dataRatingsAvg = 0;
    if (data.ratings.length > 0) {
      dataRatingsAvg = Number(
        data.ratings.reduce((a, b) => a + b) / data.ratings.length
      );
    }
    console.log(
      `- ${plant}; Rarity: ${
        plants[plant].rarity
      }; Rating: ${dataRatingsAvg.toFixed(2)}`
    );
  }
}

solve([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);

// Output:
//     Plants for the exhibition:
// - Arnoldii; Rarity: 4; Rating: 0.00
// - Woodii; Rarity: 5; Rating: 7.50
// - Welwitschia; Rarity: 2; Rating: 7.00

// solve(["2",
//     "Candelabra<->10"
//     "Oahu<->10",
//     "Rate: Oahu - 7",
//     "Rate: Candelabra - 6",
//     "Exhibition"])

//Output:
// Plants for the exhibition:
// - Candelabra; Rarity: 10; Rating: 6.00
// - Oahu; Rarity: 10; Rating: 7.00

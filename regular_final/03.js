function solve(input) {
  let lines = input.shift();
  let animals = {};
  let areas = {};

  while (lines !== "EndDay") {
    let command = lines.split(" ")[0];
    let data = lines.split(" ")[1];
    let animal = data.split("-")[0];

    if (command === "Add:") {
      let neededFood = Number(data.split("-")[1]);
      let area = data.split("-")[2];

      if (animal in animals) {
        animals[animal].neededFood += neededFood;
      } else {
        animals[animal] = { neededFood, area };

        if (!(area in areas)) {
          areas[area] = 0;
        }

        areas[area]++;
      }
    } else if (command === "Feed:") {
      let fedQuantity = Number(data.split("-")[1]);
      if (animal in animals) {
        animals[animal].neededFood -= fedQuantity;
        if (animals[animal].neededFood <= 0) {
          let area = animals[animal].area;
          delete animals[animal];
          console.log(`${animal} was successfully fed`);

          areas[area]--;

          if (areas[area] === 0) {
            delete areas[area];
          }
        }
      }
    }

    lines = input.shift();
  }

  console.log("Animals:");
  let hungry = Object.entries(animals);
  for (let [name, data] of hungry) {
    console.log(` ${name} -> ${data.neededFood}g`);
  }

  console.log("Areas with hungry animals:");
  for (let [area, count] of Object.entries(areas)) {
    if (count > 0) {
      console.log(`${area}: ${count}`);
    }
  }
}
// solve([
//   "Add: Adam-4500-ByTheCreek",
//   "Add: Maya-7600-WaterfallArea",
//   "Add: Maya-1230-WaterfallArea",
//   "Feed: Jamie-2000",
//   "EndDay",
// ]);
//Output:
//     Animals:
//  Adam -> 4500g
//  Maya -> 8830g
// Areas with hungry animals:
//  ByTheCreek: 1
//  WaterfallArea: 1

// solve(["Add: Jamie-600-WaterfallArea",
//     "Add: Maya-6570-WaterfallArea",
//     "Add: Adam-4500-ByTheCreek",
//     "Add: Bobbie-6570-WaterfallArea",
//     "Feed: Jamie-2000",
//     "Feed: Adam-2000",
//     "Feed: Adam-2500",
//     "EndDay"])

// Output:
// Jamie was successfully fed
// Adam was successfully fed
// Animals:
//  Maya -> 6570g
//  Bobbie -> 6570g
// Areas with hungry animals:
//  WaterfallArea: 2

solve(["Add: Bonie-3490-RiverArea",
    "Add: Sam-5430-DeepWoodsArea",
    "Add: Bonie-200-RiverArea",
    "Add: Maya-4560-ByTheCreek",
    "Feed: Maya-2390",
    "Feed: Bonie-3500",
    "Feed: Johny-3400",
    "Feed: Sam-5500",
    "EndDay"])

//Output:
// Sam was successfully fed
// Animals:
//  Bonie -> 190g
//  Maya -> 2170g
// Areas with hungry animals:
//  RiverArea: 1
//  ByTheCreek: 1

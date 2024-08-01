function solve(input) {
  let line = input.shift();
  let foods = {};
  let sold = 0;

  while (line !== "Complete") {
    let data = line.split(" ");
    let command = data[0];
    let quantity = Number(data[1]);
    let food = data[2];
    if (command === "Receive") {
      if (quantity <= 0) {
        continue;
      } else {
        if (food in foods) {
          foods[food].quantity += quantity;
        } else {
          foods[food] = { quantity };
        }
      }
    } else if (command === "Sell") {
      if (food in foods) {
        if (foods[food].quantity > quantity) {
          console.log(`You sold ${quantity} ${food}.`);
          foods[food].quantity -= quantity;
          sold += quantity;
        } else if (foods[food].quantity === quantity) {
          console.log(`You sold ${quantity} ${food}.`);
          sold += quantity;
          delete foods[food];
        } else {
          console.log(
            `There aren't enough ${food}. You sold the last ${foods[food].quantity} of them.`
          );
          sold += foods[food].quantity;
          delete foods[food];
        }
      } else {
        console.log(`You do not have any ${food}.`);
      }
    }

    line = input.shift();
  }

  let goods = Object.entries(foods);
  for (let [item, units] of goods) {
    console.log(`${item}: ${units.quantity}`);
  }
  console.log(`All sold: ${sold} goods`);
}

// solve([
//   "Receive 105 cookies",
//   "Receive 10 donuts",
//   "Sell 10 donuts",
//   "Sell 1 bread",
//   "Complete",
// ]);

solve([
  "Receive 10 muffins",
  "Receive 23 bagels",
  "Sell 5 muffins",
  "Sell 10 bagels",
  "Complete",
]);

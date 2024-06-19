function store(arr) {
  let totalPriceWithoutTax = 0;

  let command = arr.shift();

  while (command !== "special" && command !== "regular") {
    const partPriceNoTax = Number(command);

    if (partPriceNoTax <= 0) {
      console.log("Invalid price!");
      command = arr.shift();
      continue;
    }
    totalPriceWithoutTax += partPriceNoTax;

    command = arr.shift();
  }
  const totalTax = 0.2 * totalPriceWithoutTax;
  let totalPriceWithTax = totalPriceWithoutTax + totalTax;
  if (command === 'special') {
    totalPriceWithTax *= 0.9;
  }
  if (totalPriceWithTax === 0) {
    console.log("Invalid order!");
  } else {
    console.log(`Congratulations you've just bought a new computer!`)
console.log(`Price without taxes: ${totalPriceWithoutTax.toFixed(2)}$`)
console.log(`Taxes: ${totalTax.toFixed(2)}$`)
console.log(`-----------`)
console.log(`Total price: ${totalPriceWithTax.toFixed(2)}$`);
  }
}
store(["1050", "200", "450", "2", "18.50", "16.86", "special"]);

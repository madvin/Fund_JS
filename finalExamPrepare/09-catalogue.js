function catalogue(products) {
  let productCatalogue = {};

  for (let productInfo of products) {
    let [name, price] = productInfo.split(" : ");
    price = parseFloat(price);

    let initial = name[0];

    if (!productCatalogue[initial]) {
      productCatalogue[initial] = [];
    }

    productCatalogue[initial].push({ name, price });
  }

  let sortedInitials = Object.keys(productCatalogue).sort();

  for (let initial of sortedInitials) {
    console.log(initial);
    productCatalogue[initial].sort((a, b) => a.name.localeCompare(b.name));
    for (let product of productCatalogue[initial]) {
      console.log(`  ${product.name}: ${product.price}`);
    }
  }
}



let products1 = [
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
];

let products2 = ["Omlet : 5.4", "Shirt : 15", "Cake : 59"];

catalogue(products1);
catalogue(products2);

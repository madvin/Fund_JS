function store(arr1, arr2) {
  const products = {};

  for (let i = 0; i < arr1.length; i += 2) {
    let product = arr1[i];
    let quantity = Number(arr1[i + 1]);
    products[product] = quantity;
  }
  for (let i = 0; i < arr2.length; i += 2) {
    let product = arr2[i];
    let quantity = Number(arr2[i + 1]);

    if (products.hasOwnProperty(product)) {
        products[product] += quantity;
    } else {
        products[product] = quantity;
    }
  }

  const finalResult = Object.entries(products)
  for (const [product, quantity] of finalResult) {
    console.log(`${product} -> ${quantity}`);
  }
}

store(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],

  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);

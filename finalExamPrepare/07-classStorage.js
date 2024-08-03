class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(product) {
        if (product.quantity <= this.capacity) {
            this.storage.push(product);
            this.capacity -= product.quantity;
            this.totalCost += product.price * product.quantity;
        }
    }

    getProducts() {
        return this.storage.map(product => JSON.stringify(product)).join('\n');
    }
}



let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity); // Output: 2
console.log(storage.totalCost); // Output: 53.8

let productOneAlt = { name: 'Tomato', price: 0.90, quantity: 19 };
let productTwoAlt = { name: 'Potato', price: 1.10, quantity: 10 };
let storageAlt = new Storage(30);
storageAlt.addProduct(productOneAlt);
storageAlt.addProduct(productTwoAlt);
console.log(storageAlt.totalCost); // Output: 28.1
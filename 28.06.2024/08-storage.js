
     
class Storage {
 
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }
 
    addProduct(productObj) {
        this.storage.push(productObj);
        this.capacity -= productObj.quantity;
 
        const totalProductPrice = productObj.price * productObj.quantity;
        this.totalCost += totalProductPrice;
    }
 
    getProducts() {
        const result = [];
 
        for (const productObj of this.storage) {
            result.push(JSON.stringify(productObj));
        }
 
        return result.join('\n');
    }
}
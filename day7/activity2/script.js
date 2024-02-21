class Item {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.sold = 0;       
    }

    logDetails() {
        return console.log(`
        ${this.name} - P${this.price}
        In stock: ${this.stock}
        Units sold: ${this.sold}
        `);
    }

    buy() {
        if (this.stock < 1) {
            console.log(`${this.name} is out of stock.`);
            return;
        }
        console.log("Buying");
        this.sold += 1;
        this.stock -= 1;
    }

    return() {
        console.log("Returning");
        if (this.sold > 0) {
            this.sold -= 1;
        }
        this.stock += 1;
    }
}

const item1 = new Item("Alcohol", 30, 5);
const item2 = new Item("Tissue", 15, 3);
const item3 = new Item("Soap", 40, 2);

item1.buy();
item1.buy();
item1.buy();
item1.return();
item1.logDetails();

item2.buy();
item2.buy();
item2.return();
item2.return();
item2.logDetails();

item3.return();
item3.return();
item3.return();
item3.logDetails();
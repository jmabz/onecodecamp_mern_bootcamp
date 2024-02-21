class House {
    constructor(location, price, lot, type) {
        this.location = location;
        this.price = price;
        this.lot = lot;
        this.type = type;
        this.discount = this.type === "Pre-selling" ? 0.2 : 0.05;
        this.show_all();
    }

    get_discounted_price() {
        return this.price - (this.price * this.discount);
    }

    show_all() {
        console.log(`Location: ${this.location}\nPrice: ${this.price}\nLot: ${this.lot}sqm\nType: ${this.type}\nDiscount: ${this.discount}\nTotal Price: ${this.get_discounted_price()}`);
    }
}

const house1 = new House("Baguio", 1200000, 170, "Pre-selling");
const house2 = new House("Davao", 1500000, 190, "Ready for Occupancy");
const house3 = new House("Cebu", 1100000, 120, "Ready for Occupancy");
const house4 = new House("La Union", 1900000, 210, "Pre-selling");
const house5 = new House("Makati", 1700000, 200, "Pre-selling");
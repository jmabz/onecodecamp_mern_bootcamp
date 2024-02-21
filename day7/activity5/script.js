class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.stamina = 100;
        this.mana = 100;
    }

    walk() {
        if ((this.stamina - 1) >= 0) {
            this.stamina -= 1;
            return;
        }
        console.log("Not enough stamina!");
    }

    run() {
        if ((this.stamina - 3) >= 0) {
            this.stamina -= 3;
            return;
        }
        console.log("Not enough stamina!");
    }

    showStats() {
        console.log(`Name: ${this.name}\nHealth: ${this.health}\nStamina: ${this.stamina}\nMana: ${this.mana}`);
    }
}

const character = new Character("character");
character.walk();
character.walk();
character.walk();
character.run();
character.run();
character.showStats();

class Shaman extends Character {
    constructor(name) {
        super(name);
        this.health = 150;
    }

    heal() {
        this.health += 5;
        this.stamina += 5;
        this.mana += 5;
    }
}

const shaman = new Shaman("Bob");
shaman.walk();
shaman.walk();
shaman.walk();
shaman.run();
shaman.run();
shaman.heal();
shaman.showStats();

class Swordsman extends Character {
    constructor(name) {
        super(name);
        this.health = 170;
    }

    slash() {
        if ((this.mana - 10) >= 0) {
            this.mana -= 10;
            return;
        }
        console.log("Not enough mana!");
    }

    showStats() {
        console.log("I am powerful!");
        super.showStats();
    }
}

const swordsman = new Swordsman("Davey");
swordsman.walk();
swordsman.walk();
swordsman.walk();
swordsman.run();
swordsman.run();
swordsman.slash();
swordsman.slash();
swordsman.showStats();
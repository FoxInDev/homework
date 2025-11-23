'use strict';

class Personash {
    constructor(rasa, name, language) {
        this.rasa = rasa;
        this.name = name;
        this.language = language;
    }

    tell() {
        console.log('Hello!');
    }
}

class Ork extends Personash {
    constructor(weapon) {
        super(rasa, name, language);
        this.weapon = weapon;
    }

    hit() {
        console.log(`hit!`);
    }

    tell() {
        console.log(`Hello! I'm Ork xD!`);
    }
}

class Elf extends Personash {
    constructor(magia) {
        super(rasa, name, language);
        this.magia = magia;
    }

    createMagia() {
        console.log(`Сто тыщ тадыщ перпл скул дай бесплатный курс по реакт появись!`);
    }

    tell() {
        console.log(`Hello! I'm Elf)`);
    }
}
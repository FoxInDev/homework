'use strict';

const Character = function(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}

Character.prototype.speak = function() {
    console.log(this.language, this.name);
}

const Orc = function(name, language, weapon) {
    Character.call(this, 'Орк', name, language);
    this.weapon = weapon;
}

const Elf = function(name, language, spellType) {
    Character.call(this, 'Эльф', name, language);
    this.spellType = spellType;
}

Elf.prototype.castSpell = function() {
    console.log(`${this.name} создает заклинание: ${this.spellType}`);
};

Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.attack = function() {
    console.log(`${this.name} бьет ${this.weapon}`);
}

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;
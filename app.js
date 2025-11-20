'use strict';

class Car {
    #_marka;
    #_model;
    #_probeg;

    constructor(marka, model, probeg /* 1. Пробег как передача параметра, он должен совпадать с названием сеттера, чтобы всё сработало */) {
        this.#_marka = marka;
        this.#_model = model;
        this.#_probeg = probeg /* 2. Вызываем сеттер для установки/валидации. Тут валидации не написал, она не нужна по тз  */;
    }

    get probeg() /* 3. Название сеттера совпадает с параметром */ {
        return this.#_probeg;
    }

    set probeg(value /* 4. Здесь назвал по другому, чтобы не было бесконечного цикла */) {
        this.#_probeg = value;
    }

    info() {
        console.log(this.#_marka, this.#_model, this.#_probeg)
    }
}
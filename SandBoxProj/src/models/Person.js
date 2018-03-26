/*
 * Class to describe a single Person in list context
 */

export class Person {
    constructor(name, height, birthYear) {
        this.name = name;
        this.height = height;
        this.birthYear = birthYear;
    }

    getName() {
        return this.name;
    }

    getHeight() {
        return this.height;
    }

    getBirthYear() {
        return this.birthYear;
    }
}
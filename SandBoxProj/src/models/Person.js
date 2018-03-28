/*
 * Class to describe a single Person in list context
 */

export class Person {
    constructor(name, birth_year, eye_color, gender, hair_color, height, mass, skin_color, homeworld, films, species, starships, vehicles, url) {
        this.name = name;
        this.birth_year = birth_year;
        this.eye_color = eye_color;
        this.gender = gender;
        this.hair_color = hair_color;
        this.height = height;
        this.mass = mass;
        this.skin_color = skin_color;
        this.homeworld = homeworld;
        this.films = films;
        this.species = species;
        this.starships = starships;
        this.vehicles = vehicles;
        this.url = url;
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


/*
 * Class to describe a single Person in list context
 */

export class Species {
    constructor(name, classification, designation, average_height, average_lifespan, eye_colors, hair_colors, skin_colors, language, homeworld, people, films, url) {
        this.name = name;
        this.classification = classification;
        this.designation = designation;
        this.average_height = average_height;
        this.average_lifespan = average_lifespan;
        this.eye_colors = eye_colors;
        this.hair_colors = hair_colors;
        this.skin_colors = skin_colors;
        this.language = language;
        this.homeworld = homeworld;
        this.people = people;
        this.films = films;
        this.url = url;
    }

    getName() {
        return this.name;
    }
}


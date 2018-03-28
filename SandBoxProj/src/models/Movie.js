/*
 * Class to describe a single Movie in list context
 */

export class Movie {
    constructor(title, id, overview, director, producer, releaseDate, species, starships, vehicles, characters, planets, url) {
        this.title = title;
        this.id = id;
        this.url = url;
        this.overview = overview;
        this.releaseDate = releaseDate;
        this.director = releaseDate;
        this.producer = releaseDate;
        this.species = releaseDate;
        this.starships = releaseDate;
        this.vehicles = vehicles;
        this.characters = characters;
        this.planets = planets;
    }

    getTitle() {
        return this.title;
    }

    getId() {
        return this.id;
    }

    getReleaseDate() {
        return this.releaseDate;
    }

    getOverview() {
        return this.overview;
    }
}


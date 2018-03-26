/*
 * Class to describe a complete Movie
 */

export class MovieComplete {
    constructor(title, id, overview, releaseDate, characters, planets, starships, vehicles, species) {
        this.title = title;
        this.id = id;
        this.overview = overview;
        this.releaseDate = releaseDate;
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
/*
 * Class to describe a single Movie in list context
 */

export class Movie {
    constructor(title, id, overview, releaseDate, url) {
        this.title = title;
        this.id = id;
        this.url = url;
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
/*
 * Class to describe a single Movie summary
 */

export class Movie {
    constructor(title, id, imageUrl, popularity, releaseDate, overview) {
        this.title = title;
        this.id = id;
        this.imageUrl = imageUrl;
        this.popularity = popularity;
        this.releaseDate = releaseDate;
        this.overview = overview;
    }

    getTitle() {
        return this.title;
    }

    getId() {
        return this.id;
    }

    getImageUrl() {
        return this.imageUrl;
    }

    getPopularity() {
        return this.popularity;
    }

    getReleaseDate() {
        return this.releaseDate;
    }

    getOverview() {
        return this.overview;
    }
}
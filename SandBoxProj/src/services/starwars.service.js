//-------------------------------------------------------------------
//
// The purpose of this class is to provide a single location that the
// rest of the application can use to obtain URL routes for working with
// the backend API.
//
//-------------------------------------------------------------------
import {
    Alert,
} from 'react-native';
import apiService from './api.service';
import { Movie } from '../models/Movie';
import { MovieComplete } from '../models/MovieComplete';

let MovieService = class MovieService {
	constructor() {
    }
    
    getRoot() {
        return new Promise((resolve, reject) => {
            fetch(apiService.getData())
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.results.forEach(element => {
                    items.push(element);
                });
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }
    

    getMovieList(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.results.forEach(element => {
                    items.push(new Item(element.name, element.url));
                });
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    getMovie() {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.results.forEach(element => {
                    items.push(new Movie(element.title, element.episode_id, element.opening_crawl, element.release_date, element.url));
                });
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    getMovie(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                
                let item = new MovieComplete(element.title, element.episode_id, element.opening_crawl, element.release_date, element.characters, element.planets, element.starships, element.species);

                resolve(item);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }
    
    getPerson(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                
                let item = new Person(element.name, element.height, element.birth_year);

                resolve(item);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    getPersonList(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.results.forEach(element => {
                    items.push(new Person(element.title, element.episode_id, element.opening_crawl, element.release_date, element.url));
                });
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    getPlanetList(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.results.forEach(element => {
                    items.push(new Planet(element.title, element.episode_id, element.opening_crawl, element.release_date, element.url));
                });
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }


    getPlanet(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                
                let item = new Person(element.name, element.height, element.birth_year);

                resolve(item);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    getSpeciesList(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.results.forEach(element => {
                    items.push(new Species(element.title, element.episode_id, element.opening_crawl, element.release_date, element.url));
                });
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    getSpecies(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                
                let item = new Species(element.name, element.height, element.birth_year);

                resolve(item);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    getStarshipList(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.results.forEach(element => {
                    items.push(new Starship(element.title, element.episode_id, element.opening_crawl, element.release_date, element.url));
                });
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    getStarship(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                
                let item = new Starship(element.name, element.height, element.birth_year);

                resolve(item);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    getVehicleList(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.results.forEach(element => {
                    items.push(new Vehicle(element.title, element.episode_id, element.opening_crawl, element.release_date, element.url));
                });
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    getVehicle(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                
                let item = new Vehicle(element.name, element.height, element.birth_year);

                resolve(item);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    launchAlert(title, message)
    {
      Alert.alert (
        title,
        message,
        [
          {text: 'Dismiss'},
        ],
        {cancelable: false}
      );
    }
};

// Create a Singleton
const movieService = new MovieService();
export default movieService;
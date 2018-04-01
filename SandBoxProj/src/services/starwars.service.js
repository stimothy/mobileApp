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
import { Person } from '../models/Person';
import { Planet } from '../models/Planet';
import { Species } from '../models/Species';
import { Starship } from '../models/Starships';
import { Vehicle } from '../models/Vehicles';

let MovieService = class MovieService {
	constructor() {
    }
    
    /* GET the main page */
    getData() {
        console.log('getdata and ish');
        return new Promise((resolve, reject) => {
            fetch(apiService.getData())
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                let items = [];
                items.push(responseJson['films']);
                items.push(responseJson['people']);
                items.push(responseJson['planets']);
                items.push(responseJson['species']);
                items.push(responseJson['starships']);
                items.push(responseJson['vehicles']);
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }
    
    /* GET movie list */
    getFilmList(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.results.forEach(element => {
                    items.push(new Movie(element.title, element.episode_id, element.opening_crawl, 
                        element.director, element.producer, element.release_date, 
                        element.species, element.starships, element.vehicles, element.characters, element.planets, element.url));
                });
                console.log(items);
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    /* SEARCH movie list */
    searchFilms(term) {
        return new Promise((resolve, reject) => {
            fetch(apiService.searchFilms(term))
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                if(responseJson) {
                    responseJson.results.forEach(element => {
                        items.push(new Movie(element.title, element.episode_id, element.opening_crawl, 
                            element.director, element.producer, element.release_date, 
                            element.species, element.starships, element.vehicles, element.characters, element.planets, element.url));
                    });
                }
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    getFilm(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                let element = responseJson;
                let item = new Movie(element.title, element.episode_id, element.opening_crawl, 
                    element.director, element.producer, element.release_date, 
                    element.species, element.starships, element.vehicles, element.characters, element.planets, element.url);

                resolve(item);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }
    
    /* GET person */
    getPerson(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                let element = responseJson;
                let item = new Person(element.name, element.birth_year, element.eye_color, element.gender, 
                    element.hair_color, element.height, element.mass, element.skin_color, element.homeworld, 
                    element.films, element.species, element.starships, element.vehicles, element.url);

                resolve(item);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    /* SEARCH person list */
    searchPersons(term) {
        return new Promise((resolve, reject) => {
            fetch(apiService.searchPeople(term))
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                if(responseJson) {
                    responseJson.results.forEach(element => {
                        items.push(new Person(element.name, element.birth_year, element.eye_color, element.gender, 
                            element.hair_color, element.height, element.mass, element.skin_color, element.homeworld, 
                            element.films, element.species, element.starships, element.vehicles, element.url));
                    });
                }
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    /* GET person list */
    getPersonList(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.results.forEach(element => {
                    items.push(new Person(element.name, element.birth_year, element.eye_color, element.gender, 
                        element.hair_color, element.height, element.mass, element.skin_color, element.homeworld, 
                        element.films, element.species, element.starships, element.vehicles, element.url));
                });
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    /* GET planet list */
    getPlanetList(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.results.forEach(element => {
                    items.push(new Planet(element.name, element.diameter, element.rotation_period, element.orbital_period, 
                        element.gravity, element.population, element.climate, element.terrain, 
                        element.surface_water, element.residents, element.films, element.url));
                });
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    /* SEARCH planet list */
    searchPlanets(term) {
        return new Promise((resolve, reject) => {
            fetch(apiService.searchPlanets(term))
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                if(responseJson) {
                    responseJson.results.forEach(element => {
                        items.push(new Planet(element.name, element.diameter, element.rotation_period, element.orbital_period, 
                            element.gravity, element.population, element.climate, element.terrain, 
                            element.surface_water, element.residents, element.films, element.url));
                    });
                }
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    /* GET single planet */
    getPlanet(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                let element = responseJson;

                let item = new Planet(element.name, element.diameter, element.rotation_period, element.orbital_period, 
                    element.gravity, element.population, element.climate, element.terrain, 
                    element.surface_water, element.residents, element.films, element.url);

                resolve(item);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    /* GET species list */
    getSpeciesList(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.results.forEach(element => {
                    items.push(new Species(element.name, element.classification, element.designation, element.average_height, 
                        element.average_lifespan, element.eye_colors, element.hair_colors, 
                        element.skin_colors, element.language, element.homeworld, element.people, element.films, element.url));
                });
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    /* SEARCH species list */
    searchSpecies(term) {
        return new Promise((resolve, reject) => {
            fetch(apiService.searchSpecies(term))
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                if(responseJson) {
                    responseJson.results.forEach(element => {
                        items.push(new Species(element.name, element.classification, element.designation, element.average_height, 
                            element.average_lifespan, element.eye_colors, element.hair_colors, 
                            element.skin_colors, element.language, element.homeworld, element.people, element.films, element.url));
                    });
                }
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    /* GET single species */
    getSpecies(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                let element = responseJson;
                let item = new Species(element.name, element.classification, element.designation, element.average_height, 
                    element.average_lifespan, element.eye_colors, element.hair_colors, 
                    element.skin_colors, element.language, element.homeworld, element.people, element.films, element.url);

                resolve(item);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    /* GET starship list */
    getStarshipList(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.results.forEach(element => {
                    items.push(new Starship(element.name, element.model, element.starship_class, element.manufacturer, element.cost_in_credits, 
                        element.length, element.crew, element.passengers, element.max_atmosphering_speed, element.hyperdrive_rating, 
                        element.MGLT, element.cargo_capacity, element.consumables, element.films, element.pilots, element.url));
                });
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    /* SEARCH starship list */
    searchStarships(term) {
        return new Promise((resolve, reject) => {
            fetch(apiService.searchStarships(term))
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                if(responseJson) {
                    responseJson.results.forEach(element => {
                        items.push(new Starship(element.name, element.model, element.starship_class, element.manufacturer, element.cost_in_credits, 
                            element.length, element.crew, element.passengers, element.max_atmosphering_speed, element.hyperdrive_rating, 
                            element.MGLT, element.cargo_capacity, element.consumables, element.films, element.pilots, element.url));
                    });
                }
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    /* GET single starship */
    getStarship(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                let element = responseJson;
                let item = new Starship(element.name, element.model, element.starship_class, element.manufacturer, element.cost_in_credits, 
                    element.length, element.crew, element.passengers, element.max_atmosphering_speed, element.hyperdrive_rating, 
                    element.MGLT, element.cargo_capacity, element.consumables, element.films, element.pilots, element.url);

                resolve(item);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    /* GET vehicle list */
    getVehicleList(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.results.forEach(element => {
                    items.push(new Vehicle(element.name, element.model, element.vehicle_class, element.manufacturer, 
                        element.length, element.cost_in_credits, element.crew, element.passengers, element.max_atmosphering_speed, 
                        element.cargo_capacity, element.consumables, element.films, element.pilots, element.url));
                });
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    /* SEARCH vehicle list */
    searchVehicles(term) {
        return new Promise((resolve, reject) => {
            fetch(apiService.searchVehicles(term))
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                if(responseJson) {
                    responseJson.results.forEach(element => {
                        items.push(new Vehicle(element.name, element.model, element.vehicle_class, element.manufacturer, 
                            element.length, element.cost_in_credits, element.crew, element.passengers, element.max_atmosphering_speed, 
                            element.cargo_capacity, element.consumables, element.films, element.pilots, element.url));
                    });
                }
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    /* GET single vehicle */
    getVehicle(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                let element = responseJson;
                let item = new Vehicle(element.name, element.model, element.vehicle_class, element.manufacturer, 
                    element.length, element.cost_in_credits, element.crew, element.passengers, element.max_atmosphering_speed, 
                    element.cargo_capacity, element.consumables, element.films, element.pilots, element.url);

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
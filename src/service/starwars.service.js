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

let MovieService = class MovieService {
	constructor() {
	}
    
    getMovies(id, page) {
        return new Promise((resolve, reject) => {
            fetch(apiService.getMoviesInGenreList(id, page))
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.results.forEach(element => {
                    items.push(new Movie(element.title, element.id, ('https://image.tmdb.org/t/p/w1280/' + element.poster_path), element.popularity, element.release_date, element.overview.substring(0, 40)));
                });
                resolve(items);
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
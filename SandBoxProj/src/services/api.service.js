import {
    Alert,
} from 'react-native';

let ApiService = class ApiService 
{
    constructor() 
    {
		this.apiProtocol = 'https:';
		this.apiHost = 'swapi.co/api/';
	}
    
    get apiLocation() 
    {
      	return `${this.apiProtocol}//${this.apiHost}`;
    }

    getData()
    {
        console.log(this.apiLocation + '?format=json');
        return `${this.apiLocation}?format=json`
    }

    //searches for titles of films.
    searchFilms(term)
    {
        return `${this.apiLocation}films/?format=json&search=${term}`
    }

    //searches for names of people
    searchPeople(term)
    {
        return `${this.apiLocation}people/?format=json&search=${term}`
    }

    //searches for names of planets
    searchPlanets(term)
    {
        return `${this.apiLocation}planets/?format=json&search=${term}`
    }

    //searches for names of planets
    searchSpecies(term)
    {
        return `${this.apiLocation}species/?format=json&search=${term}`
    }

    //searches for names or models of starships
    searchStarships(term)
    {
        return `${this.apiLocation}starships/?format=json&search=${term}`
    }

    //searches for names and models of vehicles
    searchVehicles(term)
    {
        return `${this.apiLocation}vehicles/?format=json&search=${term}`
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

const apiService = new ApiService();
export default apiService;
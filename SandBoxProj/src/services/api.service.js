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
        return `${this.apiLocation}`
    }

    //searches for titles of films.
    searchFilms(term)
    {
        return `${this.apiLocation}films/?search=${term}`
    }

    //searches for names of people
    searchPeople(term)
    {
        return `${this.apiLocation}people/?search=${term}`
    }

    //searches for names of planets
    searchPlanets(term)
    {
        return `${this.apiLocation}planets/?search=${term}`
    }

    //searches for names of planets
    searchSpecies(term)
    {
        return `${this.apiLocation}species/?search=${term}`
    }

    //searches for names or models of starships
    searchStarships(term)
    {
        return `${this.apiLocation}starships/?search=${term}`
    }

    //searches for names and models of vehicles
    searchVehicles(term)
    {
        return `${this.apiLocation}vehicles/?search=${term}`
    }
};

const apiService = new ApiService();
export default apiService;
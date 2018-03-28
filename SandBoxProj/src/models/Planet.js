
/*
 * Class to describe a single Person in list context
 */

export class Planet {
    constructor(name, diameter, rotation_period, orbital_period, gravity, population, climate, terrain, surface_water, residents, films, url) {
        this.name = name;
        this.diameter = diameter;
        this.rotation_period = rotation_period;
        this.orbital_period = orbital_period;
        this.gravity = gravity;
        this.population = population;
        this.climate = climate;
        this.terrain = terrain;
        this.surface_water = surface_water;
        this.residents = residents;
        this.films = films;
        this.url = url;
    }

    getName() {
        return this.name;
    }
}


/*
 * Class to describe a single Person in list context
 */

export class Vehicle {
    constructor(name, model, vehicle_class, manufacturer, length, cost_in_credits, crew, passengers, max_atmosphering_speed, cargo_capacity, consumables, films, pilots, url) {
        this.name = name;
        this.model = model;
        this.vehicle_class = vehicle_class;
        this.manufacturer = manufacturer;
        this.length = length;
        this.cost_in_credits = cost_in_credits;
        this.crew = crew,
        this.passengers = passengers,
        this.max_atmosphering_speed = max_atmosphering_speed;
        this.cargo_capacity = cargo_capacity;
        this.consumables = consumables;
        this.films = films;
        this.pilots = pilots;
        this.url = url;   
    }

    getName() {
        return this.name;
    }
}



export default class SwapiService {

  _apiBase = 'https://swapi.co/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }
    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results.map((person, id) => this._transformPerson(person, id + 1));
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}`);
    return this._transformPerson(person, id);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results.map((planet, id) => this._transformPlanet(planet, id + 1));
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet, id);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results.map((ss, id) => this._transformStarship(ss, id + 1));
  }

  async getStarship(id) {
    const starship = await this.getResource(`/starships/${id}`);
    return this._transformStarship(starship, id);
  }

  // _extractId(item) {
  //   const idRegExp = /\/([0-9]*)\/$/;
  //   return item.url.match(idRegExp)[1];
  // }

  _transformPlanet = (planet, id) => {
    return {
      id,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _transformStarship = (starship, id) => {
    return {
      id,
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity
    }
  }

  _transformPerson = (person, id) => {
    return {
      id,
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }
}

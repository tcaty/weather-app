import { getNumberTerms } from '../utils';

export default class GeodbService {

  _baseURL = 'http://geodb-free-service.wirefreethought.com/v1';
  _maxLimit = 10; // API's restrictions

  _transformCity = ({ city, country, countryCode }) => ({ city, country, countryCode });

  _transformCities = (cities) => cities.map(city => this._transformCity(city));
 
  _getCities = async (take, skip) => {
    const response = await fetch(
      `${this._baseURL}/geo/cities?limit=${take}&offset=${skip}&minPopulation=495000&languageCode=en`
    );
  
    if (!response.ok) {
      throw new Error('Something goes wrong');
    }

    const { data } = await response.json();

    return this._transformCities(data);
  }

  getCities = async (quantity) => {
    const terms = getNumberTerms(quantity, this._maxLimit);
    let skip = 0;
    const cities = [];

    for (let key of Object.keys(terms)) {
      for (let i = terms[key]; i > 0; i--) {
        cities.push(...await this._getCities(key, skip));
        skip += key;
      }
    }

    return cities;
  }
}
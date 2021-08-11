
export default class OpenWeatherService {

  _baseURL = 'https://community-open-weather-map.p.rapidapi.com';
  _baseHeaders = {
    'x-rapidapi-key': '35eff0b0cdmsh101939d77daa6c9p16d322jsnb624e75f5442',
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
  };

  _getRandomPrecipitation = () => {
    // cause API has no info about precipitation
    const precipitation = [12, 34, 65, 2, 23, 11, 78, 45, 22, 13, 19, 43, 42, 32];
    return precipitation[Math.ceil(Math.random() * precipitation.length) - 1];
  }

  _transformCityField = ({ city: { country, name }, list }) => ({ city: { country, name }, list });

  _transformListItem = ({ dt_txt, main: { humidity, temp }, weather, wind: { speed } }) => {
    weather = weather[0];
    const { description, icon, main } = weather;
    return {
      date: dt_txt,
      main: {
        temperature: temp - 273,
        humidity,
        precipitation: this._getRandomPrecipitation(),
        wind: speed
      },
      weather: {
        main,
        icon,
        description
      }
    }
  }

  _transformData = (data) => {
    const temp = this._transformCityField(data);
    return {
      ...temp,
      list: temp.list.map(item => this._transformListItem(item))
    };
  };

  getFiveDayForecast = async (cityName, countryCode) => {

    const response = await fetch(`${this._baseURL}/forecast?q=${cityName}%2C${countryCode}`, {
        method: 'GET',
        headers: this._baseHeaders
      }
    );

    if (!response.ok) {
      throw new Error('something goes wrong');
    }

    const data = await response.json()

    return this._transformData(data);
  }
}
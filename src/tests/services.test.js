import { GeodbService, OpenWeatherService } from "../services";

describe('GeodbService' , () => {

  const geodbService = new GeodbService();

  it('should transform all objects to city, country, countryCode keys', () => {
    
    const data = [
      { hello: 'world', city: 'Tula', country: 'Russia', countryCode: 'RU' },
      { hello: 'world', city: 'Moscow', country: 'Russia', countryCode: 'RU', dsalda: '123213lpe;wq;' },
      { world: 'world', city: 'Kursk', country: 'Russia', countryCode: 'RU' }
    ];

    const expectedData = [
      { city: 'Tula', country: 'Russia', countryCode: 'RU' },
      { city: 'Moscow', country: 'Russia', countryCode: 'RU' },
      { city: 'Kursk', country: 'Russia', countryCode: 'RU' }
    ];

    expect(geodbService._transformCities(data)).toEqual(expectedData);
  });
})

describe('OpenWeatherService', () => {

  const openWeatherService = new OpenWeatherService();

  it('should transform objs correctly', () => {

    const data = {
      city: {
        id: 21321,
        name: 'dsads',
        coord: { lat: 311.00302, lon: 32.321},
        country: 'ew'
      },
      hello: 'world',
      dsa: 21312,
      lll: 'lll',
      list: [
        {
          clouds: 32,
          dt: 32131,
          dt_txt: 'sdadas',
          main: {
            temp: 273,
            feels_like: 32.321111,
            humidity: 68
          },
          weather: [{
            main: 'dsaads',
            icon: 'dsa',
            description: 'dsada'
          }],
          wind: {
            speed: 1000,
            deg: 100
          }
        }
      ]
    };
    
    const expectedData = {
      city: {
        name: 'dsads',
        country: 'ew'
      },
      list: [
        {
          date: 'sdadas',
          main: {
            temperature: 0,
            humidity: 68,
            wind: 1000
          },
          weather: {
            main: 'dsaads',
            icon: 'dsa',
            description: 'dsada'
          }
        }
      ]
    };

    const transformedData = openWeatherService._transformData(data);
    
    delete transformedData.list[0].main.precipitation;

    expect(transformedData).toEqual(expectedData);
  })
})
import React from 'react';

import TodayWeatherForecastHeader from '../today-weather-forecast-header';
import WeatherForecastPreview from '../weather-forecast-preview';

import './today-weather-forecast.css';

const TodayWeatherForecast = () => {
  return (
    <div className="today-weather-forecast">
      <TodayWeatherForecastHeader />
      <WeatherForecastPreview cityColor={'black'}/>
    </div>
  );
};

export default TodayWeatherForecast;
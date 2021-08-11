import React from 'react';

import WeekWeatherForecastItem from '../week-weather-forecast-item';

import './week-weather-forecast.css';

const WeekWeatherForecast = () => {
  return (
    <div className="week-weather-forecast">
      <WeekWeatherForecastItem />
      <WeekWeatherForecastItem />
      <WeekWeatherForecastItem />
      <WeekWeatherForecastItem />
      <WeekWeatherForecastItem />
    </div>
  );
};

export default WeekWeatherForecast;
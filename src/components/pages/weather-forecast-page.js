import React, { Fragment } from 'react';

import TodayWeatherForecast from '../today-weather-forecast';
import WeekWeatherForecast from '../week-weather-forecast';

const WeatherForecastPage = () => {
  return (
    <Fragment>
      <TodayWeatherForecast />
      <WeekWeatherForecast />
    </Fragment>
  );
};

export default WeatherForecastPage;
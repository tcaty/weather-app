import React from 'react';

import HamburgerCityList from '../hamburger-city-list';

import './today-weather-forecast-header.css';

const TodayWeatherForecastHeader = () => {
  return (
    <div className="today-weather-forecast-header">
      <div className="today-weather-forecast-header__time">
        now
      </div>
      <HamburgerCityList />
    </div>
  );
};

export default TodayWeatherForecastHeader;

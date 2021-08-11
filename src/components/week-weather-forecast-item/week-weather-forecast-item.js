import React from 'react';

import img from '../../icons/weather/image_part_011.png';

import WeatherAdditionalInfo from '../weather-additional-info';

import './week-weather-forecast-item.css';

const WeekWeatherForecastItem = () => {
  return (
    <div className="week-weather-forecast-item">
      <div className="week-weather-forecast-item__top-line">
        <div className="week-weather-forecast-item__date-info date-info">
          <div className="date-info__day-of-week">mo</div>
          <div className="date-info__date">16.02</div>
        </div>
        <div className="week-weather-forecast-item__weather-icon">
          <img src={img} alt="weather"/>
        </div>
        <div className="week-weather-forecast-item__weather-info weather-info">
          <div className="weather-info__weather">Sunny</div>
          <div className="weather-info__temperature">19°C</div>
        </div>
      </div>
      <div className="week-weather-forecast-item__bottom-line">
       <WeatherAdditionalInfo size={'small'}/>
      </div>
    </div>
  );
};

export default WeekWeatherForecastItem;
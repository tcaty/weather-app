import React from 'react';
import PropTypes from 'prop-types';

import img from '../../icons/weather/image_part_011.png';

import './weather-forecast-preview.css';

const WeatherForecastPreview = ({ cityColor }) => {
  
  return (
    <div className={"weather-forecast-preview"}>
      <div className="weather-forecast-preview__weather-img">
        <img src={img} alt="weather"/>
      </div>
      <div className="weather-forecast-preview-info preview-info">
        <div className="preview-info__country">Serbia</div>
        <div className={`preview-info__city_${cityColor}`}>Belgrade</div>
        <div className="preview-info__weather-preview weather-preview">
          <span className="weather-preview__weather">Sunny</span>
          <span className="weather-preview__temperature">19°C</span>
        </div>
      </div>
    </div>
  );
};

WeatherForecastPreview.propTypes = {
  cityColor: PropTypes.oneOf(['white', 'black'])
};

export default WeatherForecastPreview;
import React, { Fragment } from 'react';

import WeatherForecastPreview from '../weather-forecast-preview';
import TemperatureChart from '../temperature-chart';
import WeatherAdditionalInfo from '../weather-additional-info';

const WeatherForecastDetailsPage = () => {
  return (
    <Fragment>
      <WeatherForecastPreview cityColor={'white'}/>
      <TemperatureChart />
      <WeatherAdditionalInfo size={'big'}/>
    </Fragment>
  );
};

export default WeatherForecastDetailsPage;
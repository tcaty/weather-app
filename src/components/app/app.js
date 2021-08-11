import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { WeatherForecastPage, WeatherForecastDetailsPage } from '../pages';

import './app.css';

const App = () => {

  return (
    <div className="wrapper">
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <WeatherForecastPage />
          </Route>
          <Route path="/details">
            <WeatherForecastDetailsPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 

import App from './components/app';
import ErrorBoundry from './components/error-boundry';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundry>
      <Router>
        <App />
      </Router>
    </ErrorBoundry>
  </React.StrictMode>,
  document.getElementById('root')
);

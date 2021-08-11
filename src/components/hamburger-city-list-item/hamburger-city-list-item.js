import React from 'react';
        
import './hamburger-city-list-item.css';

const HamburgerCityListItem = () => {
  return (
    <li className="hamburger-city-list-item">
      <div className="hamburger-city-list-item__wrapper">
        <span className="hamburger-city-list-item__city">Belgrade</span>
        <span className="hamburger-city-list-item__country">Serbia</span>
      </div>
    </li>
  );
};

export default HamburgerCityListItem;
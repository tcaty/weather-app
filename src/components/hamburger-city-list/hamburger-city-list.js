import React, { useState, useCallback, useMemo } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { VscChromeClose } from 'react-icons/vsc';

import HamburgerCityListItem from '../hamburger-city-list-item';

import './hamburger-city-list.css';

const HamburgerCityList = () => {

  const [isVisible, setIsVisible] = useState(false);

  const hideList = useCallback(() => setIsVisible(false));
  const showList = useCallback(() => setIsVisible(true));

  const getRenderedCityListItems = useMemo(() => (
    [...Array(13)].map((item, index) => <HamburgerCityListItem key={index}/>)
  ));

  if (isVisible) {
    return (
      <div className="hamburger-city-list">
        <div className="hamburger-city-list__hide-icon" onClick={hideList}>
          <VscChromeClose />
        </div>
        <ul className="hamburger-city-list__city-list">
          {getRenderedCityListItems}
        </ul>
      </div>
    );
  }

  return (
    <div className="hamburger-city-list_icon" onClick={showList}>
      <GiHamburgerMenu />
    </div>
  );
};

export default HamburgerCityList;
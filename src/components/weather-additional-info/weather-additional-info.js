import React, { useMemo, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import './weather-additional-info.css';

const WeatherAdditionalInfo = ({ size }) => {

  const [icons, setIcons] = useState({
    wind: null,
    humidity: null,
    precip: null
  });

  const setIcon = useCallback((fieldName) => (icon) => {
    setIcons(state => ({
      ...state,
      [fieldName]: icon
    }));
  }, []);

  const getIcon = useCallback(async (fieldName) => {
    return (await import(`../../icons/weather-additional-info/${fieldName}-${size}.png`)).default;
  }, [size]);

  useEffect(() => {    
    (async () => {
      for (let key of Object.keys(icons)) {
        const icon = await getIcon(key);
        setIcon(key)(icon);
      }
    })()
  }, [getIcon, setIcon]);

  const renderedIcons = useMemo(() => (
    Object.keys(icons).map((icon, index) => (
      <div className={`icons__${icon}`} key={index}>
        <img src={icons[icon]} alt={`${icon}`}/>
      </div>
    ))
  ), [icons]);

  const className = useMemo(() => `weather-additional-info_${size}`, [size]);

  return (
    <div className={className}>
      <div className={`${className}__icons icons`}>
        {renderedIcons}
      </div>
      <div className={`${className}__values values`}>
        <div className="values__wind">4mph</div>
        <div className="values__humidity">63%</div>
        <div className="values__precip">14%</div>
      </div>
    </div>
  );
};

WeatherAdditionalInfo.propTypes = {
  size: PropTypes.oneOf(['small', 'big'])
}

export default WeatherAdditionalInfo;
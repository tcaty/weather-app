import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';

import './temperature-chart.css';

const TemperatureChart = () => {

  const labels = useMemo(() => [...Array(8)].map((item, index) => {
    const resultValue = index * 3;
    return resultValue < 10 ? `0${resultValue}` : `${resultValue}`;
  }), []);

  const data = useMemo(() => ({
    labels,
    datasets: [
      {
        label: 'temperature',
        data: [5, 6, -3, -2, 17, 17, 16, 15],
        borderColor: 'rgb(0, 225, 255)',
        pointRadius: 2,
        pointHoverRadius: 2
      },
      {
        label: 'zero',
        data: [...Array(8)].fill(0),
        borderColor: 'rgb(173, 175, 182)',
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  }), [labels]);

  const options = useMemo(() => ({
    scales: {
      y: {
        min: -20,
        max: 20
      }
    },
    layout: {
      padding: 20
    },
    plugins: {
      legend: {
        display: false //hide labels
      }
    },
  }), [])

  return (
    <div className="temperature-chart">
      <Line 
        height={460}
        width={590}
        data={data}
        options={options}/>
    </div>
  );
};

export default TemperatureChart;
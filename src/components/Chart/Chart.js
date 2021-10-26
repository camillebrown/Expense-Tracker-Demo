import React from 'react';

import './Chart.css';
import ChartBar from './ChartBar';

export default function Chart({ expenses }) {
  const chartData = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const exp of expenses) {
    const expMonth = exp.date.getMonth(); // getMonth() starts at 0 (Jan=0)
    chartData[expMonth].value += exp.amount;
  }

  const dataValues = chartData.map((obj) => obj.value);
  const totalMax = Math.max(...dataValues);
  
  return (
    <div className="chart">
      {chartData.map((pt) => {
        return (
          <ChartBar
            key={pt.label}
            value={pt.value}
            maxValue={totalMax}
            label={pt.label}
          />
        );
      })}
    </div>
  );
}

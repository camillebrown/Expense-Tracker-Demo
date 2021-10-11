import React from 'react';
import moment from 'moment';

export default function ExpenseDate({ date }) {
  const month = moment(date.toISOString()).format('MMMM');
  const day = moment(date.toISOString()).format('DD');
  const year = moment(date.toISOString()).format('YYYY');

  return (
    <div className='expense-date'>
      <div className='exp-date-mm'>{month}</div>
      <div className='exp-date-dd'>{day}</div>
      <div className='exp-date-yy'>{year}</div>
    </div>
  );
};

import React, { useState } from 'react';
import Card from '../common/Card';
import ExpenseDate from './ExpenseDate';
import { formatCurrency } from '../../lib/formatters';
import { Button } from '@mui/material';
import './Expenses.css';

export default function ExpenseList({ expenses }) {
  let [titles, setTitles] = useState(expenses.map(exp => exp.title));

  const changeTitle = (idx) => {
    const updated = titles.map(title => {
      if (titles.indexOf(title) === idx) {
        return title = 'Updated!';
      }
      return title;
    });
    setTitles(updated);
  };

  const getTitle = React.useCallback((id) => {
    return titles[id];
  }, [titles]);

  return (
    <Card className='expenses'>
      {
        expenses.map((exp, idx) => {
          return (
            <Card className='expense-item' key={idx}>
              <ExpenseDate date={exp.date} />
              <div className='exp-item-desc' >
                <h2>{getTitle(idx)}</h2>
                <p className='exp-item-price'>{formatCurrency(exp.amount)}</p>
              </div>
              <Button
                variant='outlined'
                onClick={() => changeTitle(idx)}
              >
                Change Title
          </Button>
            </Card>
          );
        })
      }
    </Card>
  );
};
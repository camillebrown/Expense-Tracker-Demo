import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import { formatCurrency } from '../../lib/formatters';

export default function FilteredList({ filtered }) {
  if (filtered.length === 0) {
    return <p className="expenses-filter">No Results Found</p>;
  }

  return filtered.map((exp, idx) => {
    return (
      <Card className="expense-item" key={idx}>
        <ExpenseDate date={exp.date} />
        <div className="exp-item-desc">
          <h2>{exp.title}</h2>
          <p className="exp-item-price">{formatCurrency(exp.amount)}</p>
        </div>
      </Card>
    );
  });
}

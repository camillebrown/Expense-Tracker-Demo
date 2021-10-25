import React, { useState } from 'react';
import Card from '../common/Card';
import ExpenseDate from './ExpenseDate';
import { formatCurrency } from '../../lib/formatters';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

export default function ExpenseList({ expenses }) {
  const [year, setYear] = useState('2019');

  const onSelect = (e) => {
    console.log(e.target.value);
    setYear(e.target.value);
  };

  return (
    <Card className="expenses">
      {/* ExpensesFilter is a controlled component - that means that some other component is controlling the state and changes */}
      <ExpenseFilter onSelect={onSelect} defaultYear={year} />
      {expenses.map((exp, idx) => {
        return (
          <Card className="expense-item" key={idx}>
            <ExpenseDate date={exp.date} />
            <div className="exp-item-desc">
              <h2>{exp.title}</h2>
              <p className="exp-item-price">{formatCurrency(exp.amount)}</p>
            </div>
          </Card>
        );
      })}
    </Card>
  );
}

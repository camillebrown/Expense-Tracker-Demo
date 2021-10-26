import React, { useState } from 'react';
import '../Expenses.css';
import Card from '../../UI/Card';
import FilteredList from '../FilteredList';
import ExpenseFilter from './ExpenseFilter';
import Chart from '../../Chart/Chart';

export default function ExpenseList({ expenses }) {
  const [year, setYear] = useState('');

  const onSelect = (e) => {
    setYear(e.target.value);
  };

  const filteredExpenses = expenses.filter((exp) => {
    if (year) {
      return exp.date.getFullYear().toString() === year;
    }
    return exp;
  });

  return (
    <Card className="expenses">
      {/* ExpensesFilter is a controlled component - that means that some other component is controlling the state and changes */}
      <ExpenseFilter onSelect={onSelect} />
      <Chart expenses={filteredExpenses} />
      <FilteredList filtered={filteredExpenses} />
    </Card>
  );
}

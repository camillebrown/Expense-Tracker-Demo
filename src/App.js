import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import ExpenseList from './components/Expenses/ExpenseList';

const initialExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2022, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2019, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpense = (exp) => {
    setExpenses((prevExpenses) => {
      return [exp, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2>Let's Get Started</h2>
      <NewExpense addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;

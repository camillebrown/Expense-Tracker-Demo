import React, { useState } from 'react';

import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

export default function NewExpense({ addExpense }) {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  const save = (formData) => {
    const expenseData = {
      id: Math.random().toString(),
      title: formData.title,
      amount: formData.amount,
      date: new Date(formData.date),
    };
    addExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {active ? (
        <NewExpenseForm onSave={save} toggle={toggle} />
      ) : (
        <button onClick={toggle}>Add New Expense</button>
      )}
    </div>
  );
}

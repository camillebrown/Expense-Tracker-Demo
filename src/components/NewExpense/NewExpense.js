import React from 'react';

import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

export default function NewExpense({ addExpense }) {
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
      <NewExpenseForm onSave={save} />
    </div>
  );
}

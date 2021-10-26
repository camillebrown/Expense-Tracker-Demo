import React, { useState } from 'react';

export default function NewExpenseForm({ onSave, toggle }) {
  const [formFields, setFormFields] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const changeHandler = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    // Default is the reload the page
    e.preventDefault();
    onSave(formFields);
    setFormFields({
      title: '',
      amount: '',
      date: '',
    });
    toggle();
  };

  return (
    <form onSubmit={submitForm}>
      <div className="new_exp_controls">
        <div className="new_exp_control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formFields.title}
            onChange={changeHandler}
          />
        </div>
        <div className="new_exp_control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={formFields.amount}
            onChange={changeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new_exp_control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formFields.date}
            onChange={changeHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new_exp_actions">
        <button type="button" onClick={toggle}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

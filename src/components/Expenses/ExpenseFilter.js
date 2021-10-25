import React from 'react';

import './Expenses.css';

export default function ExpenseFilter({ onSelect, defaultYear }) {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter-control">
        <label>Filter by year</label>
        <select onChange={onSelect} value={defaultYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

import React from 'react';
import classnames from 'classnames';

export default function Card({ className, children }) {

  return (
    <div className={classnames('card', className)}>
      {children}
    </div>
  );
};

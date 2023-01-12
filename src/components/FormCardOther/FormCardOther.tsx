import React from 'react';
import './FormCardOtherStyles.css';

export const FormCardOther = () => {
  return (
    <div className="card__other">
      <div className="card__valid">
        Valid:
        <input type="text" placeholder="Valid True" />
      </div>
      <div className="card__cvv">
        Cvv:
        <input type="number" min="3" max="3" placeholder="CVV" />
      </div>
    </div>
  );
};

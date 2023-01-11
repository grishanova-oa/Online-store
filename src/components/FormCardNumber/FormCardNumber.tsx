import React from 'react';
import './FormCardNumberStyles.css';

export const FormCardNumber = () => {
  return (
    <div className="card__number">
      <img
        src="https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=700&quality=85&auto=format&fit=max&s=fb1dca6cdd4589cd9ef2fc941935de71"
        alt=""
      />
      <input type="number" placeholder="Card number" />
    </div>
  );
};

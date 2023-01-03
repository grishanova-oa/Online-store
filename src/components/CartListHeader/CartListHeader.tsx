import React from 'react';
import './CartListHeaderStyles.css';

export const CartListHeader = () => {
  return (
    <div className="title-page">
      <h2>Products in Cart</h2>
      <div className="title-page__limit">
        <p>Limit:</p>
        <input type="number" min="1" className="input__limit" value="1" />
      </div>
      <div className="title-page__page">
        <p>Page:</p>
        <button className="title-page__btn-left" aria-label="btn-left" type="button" />
        <span className="page__number">1</span>
        <button className="title-page__btn-right" aria-label="btn-right" type="button" />
      </div>
    </div>
  );
};

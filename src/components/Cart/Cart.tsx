import React from 'react';
import { Link } from 'react-router-dom';
import './CartStyles.css';

export const Cart = () => {
  return (
    <Link to={{ pathname: '/cart' }}>
      <div className="cart">
        <div className="count-product">0</div>
      </div>
    </Link>
  );
};

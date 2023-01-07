import React from 'react';
import './LogoStyles.css';

interface Ilogo {
  changeShowCart: (value: boolean) => void;
}
export const Logo = ({ changeShowCart }: Ilogo) => {
  const changeShow = () => changeShowCart(false);
  return (
    <button className="logo" aria-label="btn-cart" type="button" onClick={changeShow}>
      <div className="logo__img" />
      <div className="logo__text">Online Store</div>
    </button>
  );
};

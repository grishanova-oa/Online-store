import React from 'react';
import './LogoStyles.css';

interface Ilogo {
  changePageContent: (activePage: string) => void;
}
export const Logo = ({ changePageContent }: Ilogo) => {
  const changeShow = () => changePageContent('');
  return (
    <button className="logo" aria-label="btn-cart" type="button" onClick={changeShow}>
      <div className="logo__img" />
      <div className="logo__text">Online Store</div>
    </button>
  );
};

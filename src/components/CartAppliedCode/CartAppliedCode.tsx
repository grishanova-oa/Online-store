import React from 'react';
import './CartAppliedCodeStyles.css';

const data: { [key: string]: string } = {
  rs: 'Rolling Scopes School',
  epm: 'Epam',
};
interface ICartAppliedCode {
  name: string;
  deleteDiscount: (value: string) => void;
}
export const CartAppliedCode = ({ name, deleteDiscount }: ICartAppliedCode) => {
  const deleteSale = () => {
    deleteDiscount(name);
    console.log(deleteDiscount(name));
  };
  return (
    <div className="applied-code__added">
      {`${data[name]} 10% - `}
      <button
        className="applied-code__btn"
        aria-label="btn-applied"
        type="button"
        onClick={deleteSale}
      >
        Delete
      </button>
    </div>
  );
};

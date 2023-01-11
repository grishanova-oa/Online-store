import React, { ChangeEvent, useState } from 'react';
import { CartDiscountPromo } from '../CartDiscountPromo';
import './CartDiscountStyles.css';

const discountPrice: { [key: string]: string } = {
  rs: 'rs - 10%',
  epm: 'epm - 10%',
};

interface ICartDiscount {
  addDiscount: (value: string) => void;
}

export const CartDiscount = ({ addDiscount }: ICartDiscount) => {
  const [inputDiscount, setInputDiscount] = useState<string>('');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setInputDiscount(value);
  };

  const showDiscount = discountPrice[inputDiscount];

  const clickAddDiscount = () => {
    addDiscount(inputDiscount);
    setInputDiscount('');
  };

  return (
    <div className="discount">
      <input
        value={inputDiscount}
        type="search"
        placeholder="Enter you promo-code"
        className="discount__input"
        onChange={onChange}
      />
      <CartDiscountPromo showDiscount={showDiscount} clickAddDiscount={clickAddDiscount} />
      <div className="discount__offer">Promo for test: RS, EPM</div>
    </div>
  );
};

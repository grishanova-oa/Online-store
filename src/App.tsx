import React, { useState } from 'react';
import { CartPage } from './components/CartPage';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { tempCartData } from './tempData';
import './styles.css';
import { Main } from './components/Pages/Main/Main';

// const temp = {
//   'qwe43': 1
//   'someId2': 3
// }

// interface Some {
//   Record<number, T>
// }

export const App: React.FC = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const cartItemsCount = {
    'id: 1': 2,
  };
  const onChangeCartCount = (id: number, price: number, isAdd: boolean) => {
    // console.log(id, price, isAdd);
  };

  return (
    <div className="App">
      <Header totalAmount={totalAmount} />
      <CartPage
        cartData={tempCartData}
        cartItemsCount={cartItemsCount}
        onChangeCartCount={onChangeCartCount}
      />
      <Main />
      <Footer />
    </div>
  );
};

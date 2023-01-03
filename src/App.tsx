import React, { useState } from 'react';
import { CartPage } from './components/CartPage';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import './styles.css';

// const data: ICartLIst[] = [
//   {
//     id: 'qwe43',
//     title: 'iPhone 9',
//     description: 'An apple mobile which is nothing like apple',
//     // price: 549,
//     discountPercentage: 12.96,
//     rating: 4.69,
//     stock: 94,
//     // brand: 'Apple',
//     // category: 'smartphones',
//     // thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
//     // images: [
//     //   'https://i.dummyjson.com/data/products/1/1.jpg',
//     //   'https://i.dummyjson.com/data/products/1/2.jpg',
//     //   'https://i.dummyjson.com/data/products/1/3.jpg',
//     //   'https://i.dummyjson.com/data/products/1/4.jpg',
//     //   'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
//     // ],
//   },
// ];

// const temp = {
//   'qwe43': 1
//   'someId2': 3
// }

export const App: React.FC = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const temp = {};
  const onChangeCartCount = (id: number, price: number, isAdd: boolean) => {
    console.log(id, price, isAdd);
  };

  return (
    <div className="App">
      <Header totalAmount={totalAmount} />
      <CartPage onChangeCartCount={onChangeCartCount} />
      <Footer />
    </div>
  );
};

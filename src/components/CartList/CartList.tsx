import React from 'react';
import './CartListStyles.css';
import { CartItems } from '../CartItems';
import { CartListHeader } from '../CartListHeader';

interface ICartLIst {
  id: number;
  title: string;
  description: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  price: number;
  thumbnail: string;
}
const data: ICartLIst[] = [
  {
    id: 1,
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    // brand: 'Apple',
    // category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    // images: [
    //   'https://i.dummyjson.com/data/products/1/1.jpg',
    //   'https://i.dummyjson.com/data/products/1/2.jpg',
    //   'https://i.dummyjson.com/data/products/1/3.jpg',
    //   'https://i.dummyjson.com/data/products/1/4.jpg',
    //   'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    // ],
  },
];

export const CartList = ({
  onChangeCartCount,
}: {
  onChangeCartCount: (id: number, price: number, isAdd: boolean) => void;
}) => {
  return (
    <div className="cart-list">
      <CartListHeader />
      {data.map((item) => (
        <CartItems onChangeCartCount={onChangeCartCount} item={item} key={item.id} />
      ))}
    </div>
  );
};

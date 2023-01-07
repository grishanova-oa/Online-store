import React, { useState } from 'react';
import { Filters } from './Filters';
import { Product } from './Product';
import { catalog } from '../../../modules/catalog';
import { IProducts } from '../../../modules/types';
import './main.css';

type tp = {
  id: number;
  name: string;
};
interface Imain {
  cartData: IProducts[];
  addToCart: (value: IProducts, isInCart: boolean) => void;
}

export const Main: React.FC<Imain> = ({ cartData, addToCart }) => {
  const products: IProducts[] = [...catalog.products];

  const productList: IProducts[] = products.map((e) => e);

  const [propsProductList, setProductList] = useState(productList);

  return (
    <main className="main">
      <section className="main__content">
        <Filters />
        <Product cartData={cartData} addToCart={addToCart} propsProductList={propsProductList} />
      </section>
    </main>
  );
};

export default Main;

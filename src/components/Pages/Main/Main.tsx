import React, { useState } from 'react';
import { Filters } from './Filters';
import { Product } from './Product';
import { catalog } from '../../../modules/catalog';
// import { getProductsListProps } from '../../../modules/product';
import { IProducts } from '../../../modules/types';
import './main.css';

type tp = {
  id: number;
  name: string;
};

export const Main: React.FC = () => {
  const products: IProducts[] = [...catalog.products];
  // console.log(products);
  const productList: IProducts[] = products.map((e) => e);

  const [propsProductList, setProductList] = useState(productList);

  return (
    <main className="main">
      <section className="main__content">
        <Filters />
        <Product propsProductList={propsProductList} />
      </section>
    </main>
  );
};

export default Main;

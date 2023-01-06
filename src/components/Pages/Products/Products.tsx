import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useSearchParams, useParams } from 'react-router-dom';
import { CSProduct } from './ProductServis';
// import { Filters } from './Filters';
// import { ProductList } from './ProductList';
import classes from './Product.module.css';
import { IProducts } from '../../../modules/types';

export const Products = (): JSX.Element => {
  const products: IProducts[] = CSProduct.getProduct();

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  const params = useParams();
  console.log(params);

  // // let productsList: IProducts[] = products.map((e) => e);
  // const [productsList, setProductsList] = useState(products.map((e) => e));

  // const [sortSelect, setSortSelect] = useState('');

  // const sortProducts = (sort: string) => {
  //   setSortSelect(sort);
  //   setProductsList(CSProduct.sortProductList(productsList, sort));
  // };

  // productList = useProduct(products);

  // [productList, setProductList] = useState(products);
  // const products: IProducts[] = [...catalog.products];
  // // console.log(products);
  // const productList: IProducts[] = products.map((e) => e);

  // const [propsProductList, setProductList] = useState(productList);

  return (
    <section className={classes.products}>
      <section className={classes.products__content}>
        {/* <Filters /> */}
        {/* <ProductList
          productList={productsList}
          sortSelect={sortSelect}
          onChangeSort={onChangeSort}
        /> */}
      </section>
    </section>
  );
};

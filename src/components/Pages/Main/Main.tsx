import React from 'react';
import { BrowserRouter, Routes, Route, useSearchParams, useParams } from 'react-router-dom';
import { Filters } from '../Products/Filters';
import { ProductList } from './ProductList';
import { Products } from '../Products/Products';
import { Error404 } from '../Error/Error';
import classes from './Main.module.css';
// import { IProducts } from '../../../modules/types';

// type TypeOfMainProps = {
//   productList: IProducts[];
//   sortSelect: string;
//   onChangeSort: (sort: string) => void;
// };

export const Main = (): JSX.Element => {
  // const { productList } = props;
  // const { sortSelect } = props;
  // const { onChangeSort } = props;

  return (
    <main className={classes.main}>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      {/* <Filters />
      <ProductList
        productList={productList}
        sortSelect={sortSelect}
        onChangeSort={onChangeSort}
      /> */}
    </main>
    // <section className={classes.main__content}>
    //   <Routes>
    //     <Route path="/" element={<Products />} />
    //     <Route path="*" element={<Error404 />} />
    //   </Routes>
    //   {/* <Filters />
    //   <ProductList
    //     productList={productList}
    //     sortSelect={sortSelect}
    //     onChangeSort={onChangeSort}
    //   /> */}
    // </section>
  );
};

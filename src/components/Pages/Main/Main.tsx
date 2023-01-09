import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Products } from '../Products/Products';
import { Error404 } from '../Error/Error';
import { IProducts } from '../../../modules/types';
import classes from './Main.module.css';
import { catalog } from '../../../modules/catalog';

interface Imain {
  setActiveProduct: (value: IProducts) => void;
  changePageContent: (newActivePage: string) => void;
  cartData: IProducts[];
  addToCart: (value: IProducts, isInCart: boolean) => void;
}

export const Main: React.FC<Imain> = ({
  cartData,
  addToCart,
  setActiveProduct,
  changePageContent,
}) => {
  const [propsProductList, setProductList] = useState<IProducts[]>([...catalog.products]);
  return (
    <BrowserRouter>
      <main className={classes.main}>
        <Routes>
          <Route
            path="/"
            element={
              <Products
                setActiveProduct={setActiveProduct}
                changePageContent={changePageContent}
                cartData={cartData}
                addToCart={addToCart}
                // propsProductList={propsProductList}
              />
            }
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Products } from '../Products/Products';
import { Error404 } from '../Error/Error';
import { Query } from '../Products/QueryServis';
import { IProducts } from '../../../modules/types';
import classes from './Main.module.css';

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
  // const [propsProductList, setProductList] = useState<IProducts[]>([...catalog.products]);
  const CSQuery = new Query();
  return (
    <BrowserRouter>
      <main className={classes.main}>
        <Routes>
          <Route
            path="/online-store"
            element={
              <Products
                setActiveProduct={setActiveProduct}
                changePageContent={changePageContent}
                cartData={cartData}
                addToCart={addToCart}
                CSQuery={CSQuery}
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

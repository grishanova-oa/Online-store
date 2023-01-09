import React from 'react';
import { ProductItem } from './ProductItem';
import './product.css';
import { IProducts } from '../../../modules/types';

type IProductProps = {
  cartData: IProducts[];
  propsProductList: IProducts[];
  addToCart: (value: IProducts, isInCart: boolean) => void;
  changePageContent: (newActivePage: string) => void;
  setActiveProduct: (value: IProducts) => void;
};

export const Product = (props: IProductProps): JSX.Element => {
  const { setActiveProduct, changePageContent, cartData, addToCart, propsProductList } = props;
  const getIsInCart = (id: number) => {
    return cartData.find((item) => item.id === id);
  };

  return (
    <section className="product">
      <div className="product__sort"> Sort </div>
      <div className="product__list">
        {propsProductList.map(
          (propsProductItem: IProducts): JSX.Element => (
            <ProductItem
              setActiveProduct={setActiveProduct}
              changePageContent={changePageContent}
              isInCart={Boolean(getIsInCart(propsProductItem.id))}
              addToCart={addToCart}
              propsProductItem={propsProductItem}
              key={propsProductItem.id}
              // showProduct={showProduct}
            />
          )
        )}
      </div>
      <div>No element</div>
    </section>
  );
};

export default Product;

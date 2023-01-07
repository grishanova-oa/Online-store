import React from 'react';
import { ProductItem } from './ProductItem';
import './product.css';
import { IProducts } from '../../../modules/types';

type IProductProps = {
  cartData: IProducts[];
  propsProductList: IProducts[];
  addToCart: (value: IProducts, isInCart: boolean) => void;
};

export const Product = (props: IProductProps): JSX.Element => {
  const { cartData, addToCart, propsProductList } = props;
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
              isInCart={Boolean(getIsInCart(propsProductItem.id))}
              addToCart={addToCart}
              propsProductItem={propsProductItem}
              key={propsProductItem.id}
            />
          )
        )}
      </div>
      <div>No element</div>
    </section>
  );
};

export default Product;

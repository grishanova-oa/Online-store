import React from 'react';
import { ProductItem } from './ProductItem';
import './product.css';
import { IProducts } from '../../../modules/types';

type IProductProps = {
  propsProductList: IProducts[];
};

export const Product = (props: IProductProps): JSX.Element => {
  const { propsProductList } = props;

  return (
    <section className="product">
      <div className="product__sort"> Sort </div>
      <div className="product__list">
        {propsProductList.map(
          (propsProductItem: IProducts): JSX.Element => (
            <ProductItem propsProductItem={propsProductItem} key={propsProductItem.id} />
          )
        )}
      </div>
      <div>No element</div>
    </section>
  );
};

export default Product;

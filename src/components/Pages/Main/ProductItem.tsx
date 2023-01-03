import React from 'react';
import './productItem.css';
import { IProducts } from '../../../modules/types';
import { ProductItemInfo } from './ProductItemInfo';

type TypeOfPropsProductItem = {
  propsProductItem: IProducts;
};

export const ProductItem: React.FC<TypeOfPropsProductItem> = (props) => {
  const { propsProductItem } = props;

  return (
    <section className="product__item">
      <div
        style={{ background: `url(${propsProductItem.thumbnail}) 0% 0% / cover` }}
        className="item__wrapper"
      >
        <div className="item__text">
          <div className="item__title">{propsProductItem.title}</div>
          <div className="item__info">
            <div className="item__info_list">
              <ProductItemInfo prop={propsProductItem.category} title="Category: " />
              <ProductItemInfo prop={propsProductItem.brand} title="Brand: " />
              <ProductItemInfo prop={propsProductItem.price} title="Price: " />
              <ProductItemInfo prop={propsProductItem.discountPercentage} title="Discont: " />
              <ProductItemInfo prop={propsProductItem.rating} title="Rating: " />
              <ProductItemInfo prop={propsProductItem.stock} title="Stock: " />
            </div>
          </div>
        </div>
        <div className="item__button">
          <button type="button">Check</button>
          <button type="button">Details</button>
        </div>
      </div>
    </section>
  );
};

export default ProductItem;

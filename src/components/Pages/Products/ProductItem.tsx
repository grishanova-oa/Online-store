import React from 'react';
import './productItem.css';
import { IProducts } from '../../../modules/types';
import { ProductItemInfo } from './ProductItemInfo';

type TypeOfPropsProductItem = {
  propsProductItem: IProducts;
  cartData: IProducts[];
  addToCart: (value: IProducts, isInCart: boolean) => void;
  changePageContent: (newActivePage: string) => void;
  setActiveProduct: (value: IProducts) => void;
};

export const ProductItem: React.FC<TypeOfPropsProductItem> = (props) => {
  const { propsProductItem } = props;
  const { cartData } = props;
  const { addToCart } = props;
  const { changePageContent } = props;
  const { setActiveProduct } = props;
  const onClick = () => {
    changePageContent('infoProduct');
    setActiveProduct(propsProductItem);
  };
  const isInCart = cartData.includes(propsProductItem);

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
        <div className="item__buttons">
          {!isInCart && (
            <button
              className="item__button"
              type="button"
              onClick={() => addToCart(propsProductItem, !isInCart)}
            >
              ADD TO CART
            </button>
          )}
          {isInCart && (
            <button
              className="item__button"
              type="button"
              onClick={() => addToCart(propsProductItem, !isInCart)}
            >
              DROP FROM CART
            </button>
          )}
          <button className="item__button" type="button" onClick={onClick}>
            DETAILS
          </button>
        </div>
      </div>
    </section>
  );
};

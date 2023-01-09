import React, { useState } from 'react';

import { IProducts } from '../../modules/types';
import { InfoAddToCart } from '../InfoAddToCart';
import { InfoGrangPhoto } from '../InfoGrangPhoto';
import { InfoListDetailed } from '../InfoListDetailed';
import { InfoProductPhotos } from '../InfoProductPhotos';
import './InfoProductBlockStyles.css';

interface ITypes {
  activeProduct: IProducts;
  cartData: IProducts[];
  addToCart: (value: IProducts, isInCart: boolean) => void;
}
export const InfoProductBlock = ({ activeProduct, cartData, addToCart }: ITypes) => {
  const getIsInCart = (id: number) => {
    return cartData.find((item) => item.id === id);
  };

  const { images } = activeProduct; // достаем значение images из activeProduct(деструктуризация)

  const [activeUrl, setActiveSrc] = useState(images[images.length - 1]);

  return (
    <div className="info-block">
      <div className="info-title">
        <h2>{activeProduct.title}</h2>
      </div>
      <div className="info-block__data">
        <InfoProductPhotos setActiveSrc={setActiveSrc} images={images} />
        <InfoGrangPhoto url={activeUrl} />
        <InfoListDetailed
          stock={activeProduct.stock}
          rating={activeProduct.rating}
          discountPercentage={activeProduct.discountPercentage}
          description={activeProduct.description}
          category={activeProduct.category}
          brand={activeProduct.brand}
        />
        <InfoAddToCart
          isInCart={Boolean(getIsInCart(activeProduct.id))}
          addToCart={addToCart}
          activeProduct={activeProduct}
          price={activeProduct.price}
        />
      </div>
    </div>
  );
};

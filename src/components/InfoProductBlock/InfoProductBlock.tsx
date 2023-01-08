import React from 'react';
import { InfoAddToCart } from '../InfoAddToCart';
import { InfoGrangPhoto } from '../InfoGrangPhoto';
import { InfoListDetailed } from '../InfoListDetailed';
import { InfoProductPhotos } from '../InfoProductPhotos';
import './InfoProductBlockStyles.css';

export const InfoProductBlock = () => {
  return (
    <div className="info-block">
      <div className="info-title">
        <h2>title</h2>
      </div>
      <div className="info-block__data">
        <InfoProductPhotos />
        <InfoGrangPhoto />
        <InfoListDetailed />
        <InfoAddToCart />
      </div>
    </div>
  );
};

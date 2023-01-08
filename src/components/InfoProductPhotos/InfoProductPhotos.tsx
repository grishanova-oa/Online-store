import React from 'react';
import './InfoProductPhotosStyles.css';

export const InfoProductPhotos = () => {
  return (
    <div className="photo-slides">
      <img
        src="https://i.dummyjson.com/data/products/1/3.jpg"
        alt="imagegrand"
        className="slides__img"
      />
      <img
        src="https://i.dummyjson.com/data/products/1/2.jpg"
        alt="imagegrand"
        className="slides__img"
      />
    </div>
  );
};

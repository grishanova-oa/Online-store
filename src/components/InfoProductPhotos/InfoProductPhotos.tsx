import React from 'react';
import './InfoProductPhotosStyles.css';

interface IPhoto {
  images: string[];
  setActiveSrc: (url: string) => void;
}
export const InfoProductPhotos = ({ images, setActiveSrc }: IPhoto) => {
  return (
    <div className="photo-slides">
      {images.map((url: string) => (
        <button key={url} type="button" className="slides__img" onClick={() => setActiveSrc(url)}>
          <img src={url} alt="alt" />
        </button>
      ))}
    </div>
  );
};

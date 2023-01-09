import React from 'react';
import './InfoGrangPhotoStyles.css';

interface IPhoto {
  url: string;
}
export const InfoGrangPhoto = ({ url }: IPhoto) => {
  return (
    <div className="grand-photo">
      <img src={url} alt="imagegrand" className="grand-photo__img" />
    </div>
  );
};

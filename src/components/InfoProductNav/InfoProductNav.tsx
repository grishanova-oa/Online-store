import React from 'react';
import './InfoProductNavStyles.css';

interface INav {
  title: string;
  category: string;
  brand: string;
}

export const InfoProductNav = ({ category, brand, title }: INav) => {
  return (
    <div className="path-navigation">
      <a href="№" className="path__link">
        Store
      </a>
      &rArr;
      <a href="№" className="path__link">
        {category}
      </a>
      &rArr;
      <a href="№" className="path__link">
        {brand}
      </a>
      &rArr;
      <a href="№" className="path__link">
        {title}
      </a>
    </div>
  );
};

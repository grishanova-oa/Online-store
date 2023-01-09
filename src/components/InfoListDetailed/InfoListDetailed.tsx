import React from 'react';
import './InfoListDetailedStyles.css';

interface IInfoListDetalied {
  discountPercentage: number;
  description: string;
  rating: number;
  stock: number;
  category: string;
  brand: string;
}
export const InfoListDetailed = ({
  discountPercentage,
  description,
  rating,
  stock,
  brand,
  category,
}: IInfoListDetalied) => {
  return (
    <div className="list-detalied">
      <div className="detail__item">
        <h3>Description:</h3>
        <p>{description}</p>
      </div>
      <div className="detail__item">
        <h3>Discount Percentage:</h3>
        <p>{discountPercentage}</p>
      </div>
      <div className="detail__item">
        <h3>Rating:</h3>
        <p>{rating}</p>
      </div>
      <div className="detail__item">
        <h3>Stock:</h3>
        <p>{stock}</p>
      </div>
      <div className="detail__item">
        <h3>Brand:</h3>
        <p>{brand}</p>
      </div>
      <div className="detail__item">
        <h3>Category:</h3>
        <p>{category}</p>
      </div>
    </div>
  );
};

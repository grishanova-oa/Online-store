import React from 'react';
import './productItemInfo.css';

type TypeOfPropsProductItem = {
  prop: string | number;
  title: string;
};

export const ProductItemInfo: React.FC<TypeOfPropsProductItem> = (props) => {
  const { prop } = props;
  const { title } = props;
  return (
    <p className="item__info_item">
      <span>{title}</span>
      {prop}
    </p>
  );
};

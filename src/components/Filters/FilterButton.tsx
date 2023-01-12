import React from 'react';
import { IFilterButton } from '../../modules/types';
import './filterButton.css';

type TypeOfFilterButton = {
  filterButton: IFilterButton;
};

export const FilterButton = (props: TypeOfFilterButton): JSX.Element => {
  const { filterButton } = props;
  const { onClickButton } = filterButton;

  return (
    <button className="filter__button" type="button" onClick={onClickButton}>
      {filterButton.title}
    </button>
  );
};

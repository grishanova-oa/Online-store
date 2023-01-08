import React from 'react';
import './filterButton.css';

interface IFilterButton {
  title: string;
}

const FilterButton: React.FC<IFilterButton> = ({ title }) => {
  return (
    <button className="filter__button" type="button">
      {title}
    </button>
  );
};

export default FilterButton;

import React from 'react';
import { FilterButton } from './FilterButton';
import { FilterSelect } from '../FiltersSelect/FilterSelect';
import { FilterSlider } from '../FilterSlider/FilterSlider';
import { IElementFilterSelect, IFilterRange, IFilterButton } from '../../modules/types';
import classes from './Filters.module.css';

type TypeOfFilter = {
  buttonReset: IFilterButton;
  buttonCopyLink: IFilterButton;
  filterCategory: IElementFilterSelect;
  filterBrand: IElementFilterSelect;
  filterPrice: IFilterRange;
  filterStock: IFilterRange;
};

export const Filters = (props: TypeOfFilter): JSX.Element => {
  const { buttonReset } = props;
  const { buttonCopyLink } = props;
  const { filterCategory } = props;
  const { filterBrand } = props;
  const { filterPrice } = props;
  const { filterStock } = props;

  return (
    <section className={classes.filters}>
      <div className={classes.filters__reset}>
        <FilterButton filterButton={buttonReset} />
        <FilterButton filterButton={buttonCopyLink} />
      </div>
      <FilterSelect filterSelect={filterCategory} />
      <FilterSelect filterSelect={filterBrand} />
      <FilterSlider filterSlider={filterPrice} />
      <FilterSlider filterSlider={filterStock} />
    </section>
  );
};

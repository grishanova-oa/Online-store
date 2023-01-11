import React from 'react';
import FilterButton from '../FiltersSelect/FilterButton';
import { FilterSelect } from '../FiltersSelect/FilterSelect';
import { FilterSlider } from '../FilterSlider/FilterSlider';
import { IElementFilterSelect, IFilterRange } from '../../modules/types';
import classes from './Filters.module.css';

type TypeOfFilter = {
  filterCategory: IElementFilterSelect;
  filterBrand: IElementFilterSelect;
  filterPrice: IFilterRange;
  filterStock: IFilterRange;
};

export const Filters = (props: TypeOfFilter): JSX.Element => {
  const { filterCategory } = props;
  const { filterBrand } = props;
  const { filterPrice } = props;
  const { filterStock } = props;

  return (
    <section className={classes.filters}>
      <div className={classes.filters__reset}>
        <FilterButton title="Reset Filters" />
        <FilterButton title="Copy Link" />
      </div>
      <FilterSelect filterSelect={filterCategory} />
      <FilterSelect filterSelect={filterBrand} />
      <FilterSlider filterSlider={filterPrice} prefics="€" />
      <FilterSlider filterSlider={filterStock} prefics="" />
    </section>
  );
};

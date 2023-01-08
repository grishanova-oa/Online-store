import React from 'react';
import FilterButton from '../../FiltersSelect/FilterButton';
import { FilterSelect } from '../../FiltersSelect/FilterSelect';
import { IElemFilterSelect } from '../../../modules/types';
import classes from './Filters.module.css';

type TypeOfFilter = {
  filterCategory: IElemFilterSelect;
  filterBrand: IElemFilterSelect;
};

export const Filters = (props: TypeOfFilter): JSX.Element => {
  const { filterCategory } = props;
  const { filterBrand } = props;

  return (
    <section className={classes.Filters}>
      <div className={classes.Filters__reset}>
        <FilterButton title="Reset Filters" />
        <FilterButton title="Copy Link" />
      </div>
      <FilterSelect filterSelect={filterCategory} />
      <FilterSelect filterSelect={filterBrand} />
      {/* <FiltersSlider /> */}
    </section>
  );
};

export default Filters;

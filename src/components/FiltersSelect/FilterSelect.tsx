import React from 'react';
import { FilterSelectItem } from './FilterSelectItem';
import { IFilterSelect, IElemFilterSelect } from '../../modules/types';
import classes from './FilterSelect.module.css';

type TypeOfFilterSelect = {
  filterSelect: IElemFilterSelect;
};

export const FilterSelect = (props: TypeOfFilterSelect): JSX.Element => {
  const { filterSelect } = props;
  const { title } = filterSelect;
  const { listFilter } = filterSelect;
  const { onCheckInput } = filterSelect;

  return (
    <div className={classes.filter__select}>
      <h3 className={classes.filter__select_title}>{title}</h3>
      <div className={classes.filter__list}>
        {listFilter.map(
          (filterSelectItem: IFilterSelect): JSX.Element => (
            <FilterSelectItem
              filterSelectItem={filterSelectItem}
              onChangeInput={onCheckInput}
              key={filterSelectItem.name}
            />
          )
        )}
      </div>
    </div>
  );
};

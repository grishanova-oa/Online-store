import React from 'react';
import { IFilterSelect, IElemFilterSelect } from '../../modules/types';
import classes from './FilterSelectItem.module.css';

type TypeOfFilterSelectItem = {
  filterSelectItem: IFilterSelect;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FilterSelectItem = (props: TypeOfFilterSelectItem): JSX.Element => {
  const { filterSelectItem } = props;
  const { onChangeInput } = props;

  return (
    <div className={classes.FilterSelect}>
      <form>
        <label htmlFor={filterSelectItem.name}>
          <input
            id={filterSelectItem.name}
            name={filterSelectItem.name}
            type="checkbox"
            checked={filterSelectItem.isCheck}
            onChange={onChangeInput}
          />
          {filterSelectItem.name}
        </label>
        <span>
          ({filterSelectItem.available}/{filterSelectItem.total})
        </span>
      </form>
    </div>
  );
};

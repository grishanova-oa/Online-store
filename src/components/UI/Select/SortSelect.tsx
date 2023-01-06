import React from 'react';
import { ISelect } from '../../../modules/types';
import classes from './SortSelect.module.css';

type TypeOfSortSelect = {
  options: ISelect[];
  sortSelect: string;
  onChangeSort: (sort: string) => void;
};

export const SortSelect = (props: TypeOfSortSelect): JSX.Element => {
  const { options } = props;
  const { sortSelect } = props;
  const { onChangeSort } = props;

  return (
    <select
      className={classes.Select}
      value={sortSelect}
      onChange={(event) => onChangeSort(event.target.value)}
    >
      <option disabled value="">
        Sort options:
      </option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

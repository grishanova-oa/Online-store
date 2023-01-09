import React from 'react';
import { IFilterSelect } from '../../modules/types';
import classes from './FilterSelectItem.module.css';

type TypeOfFilterSelectItem = {
  filterSelectItem: IFilterSelect;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FilterSelectItem = (props: TypeOfFilterSelectItem): JSX.Element => {
  const { filterSelectItem } = props;
  const { onChangeInput } = props;

  const classLabel =
    filterSelectItem.available !== 0
      ? classes.checkbox__label_activ
      : classes.checkbox__label_no_activ;

  const classSpan =
    filterSelectItem.available !== 0
      ? classes.checkbox__span_activ
      : classes.checkbox__span_no_activ;

  return (
    <div className={classes.checkbox__line}>
      <input
        className={classes.checkbox__input}
        id={filterSelectItem.name}
        name={filterSelectItem.name}
        type="checkbox"
        checked={filterSelectItem.isCheck}
        onChange={onChangeInput}
      />
      <label className={classLabel} htmlFor={filterSelectItem.name}>
        {filterSelectItem.name}
      </label>
      <span className={classSpan}>
        ({filterSelectItem.available}/{filterSelectItem.total})
      </span>
    </div>
  );
};

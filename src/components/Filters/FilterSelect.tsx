import React from 'react';
import './filterSelect.css';
import { catalog } from '../../modules/catalog';

interface IFilterSelect {
  title: string;
  filter: string;
}

interface IPropisFilterSelect {
  propsFilterSelect: IFilterSelect;
}

const FilterSelect: React.FC<IPropisFilterSelect> = ({ propsFilterSelect }) => {
  // const title = propsFilterSelect.title;

  // const FilterSelectList: React.FC[] = products.products.map(elem => <FilterSelectItem item={elem} />);

  return (
    <div className="filter__select">
      <h3 className="filter__select_title">Filter</h3>
      <div className="filter__select_list">
        {/* <FilterSelectList/> */}
        Filters
      </div>
    </div>
  );
};

export default FilterSelect;

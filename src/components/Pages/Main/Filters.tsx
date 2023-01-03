import React from 'react';
import FilterButton from '../../Filters/FilterButton';
import FilterSelect from '../../Filters/FilterSelect';
import './filters.css';

export const Filters: React.FC = () => {
  const propsFilterSelect = {
    title: 'catalog',
    filter: 'catalog',
  };

  return (
    <section className="filters">
      <div className="filters__reset">
        <FilterButton title="Reset Filters" />
        <FilterButton title="Copy Link" />
      </div>
      <FilterSelect propsFilterSelect={propsFilterSelect} />
      {/* <FiltersSlider /> */}
    </section>
  );
};

export default Filters;

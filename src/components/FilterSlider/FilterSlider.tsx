import React from 'react';
import { IFilterRange } from '../../modules/types';
import './FilterSlider.css';

type TypeOfFilterSlider = {
  filterSlider: IFilterRange;
};

export const FilterSlider = (props: TypeOfFilterSlider): JSX.Element => {
  const { filterSlider } = props;
  const { prefix } = filterSlider;
  const { onChangeSlider } = filterSlider;

  let blockFilterData = <div className="filter__data">NOT FOUND</div>;
  if (
    filterSlider.valueFilter.rangeMin.value === 0 &&
    filterSlider.valueFilter.rangeMax.value === Number.POSITIVE_INFINITY
  ) {
    blockFilterData = <div className="filter__data">NOT FOUND</div>;
  } else if (filterSlider.valueFilter.rangeMin.index === filterSlider.valueFilter.rangeMax.index) {
    const textData = prefix.concat(String(filterSlider.valueFilter.rangeMin.value));
    blockFilterData = <div className="filter__data">{textData}</div>;
  } else {
    let textDataMin = prefix.concat(String(filterSlider.valueFilter.rangeMin.value));
    let textDataMax = prefix.concat(String(filterSlider.valueFilter.rangeMax.value));
    if (filterSlider.valueFilter.rangeMin.value > filterSlider.valueFilter.rangeMax.value) {
      textDataMin = prefix.concat(String(filterSlider.valueFilter.rangeMax.value));
      textDataMax = prefix.concat(String(filterSlider.valueFilter.rangeMin.value));
    }
    blockFilterData = (
      <div className="filter__data">
        <div className="filter__data_min"> {textDataMin} </div> ⟷
        <div className="filter__data_max"> {textDataMax} </div>
      </div>
    );
  }

  return (
    <section className="filter__slider">
      <div className="filter__slider_title">{filterSlider.title}</div>
      {blockFilterData}
      <div className="filter__range">
        <input
          type="range"
          onChange={(event) => onChangeSlider(parseInt(event.target.value, 10), 'min')}
          min={filterSlider.range.min}
          max={filterSlider.range.max}
          step={1}
          value={filterSlider.valueFilter.rangeMin.index}
          className="slider"
        />
        <input
          type="range"
          onChange={(event) => onChangeSlider(parseInt(event.target.value, 10), 'max')}
          min={filterSlider.range.min}
          max={filterSlider.range.max}
          step={1}
          value={filterSlider.valueFilter.rangeMax.index}
          className="slider"
        />
      </div>
    </section>
  );
};

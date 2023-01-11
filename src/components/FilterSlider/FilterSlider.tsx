import React, { useState } from 'react';
import { IFilterRange } from '../../modules/types';
// import classes from './FilterSlider.module.css';
import './FilterSlider.css';

type TypeOfFilterSlider = {
  filterSlider: IFilterRange;
  prefics: string;
};

export const FilterSlider = (props: TypeOfFilterSlider): JSX.Element => {
  const { filterSlider } = props;
  const { prefics } = props;
  const { onChangeSlider } = filterSlider;

  let blockFilterData = <div className="filter__data">NOT FOUND</div>;
  // console.log(filterSlider.valueFilter.priceMin.index);
  // console.log(filterSlider.valueFilter.priceMax.index);

  if (
    filterSlider.valueFilter.rangeMin.value === 0 &&
    filterSlider.valueFilter.rangeMax.value === Number.POSITIVE_INFINITY
  ) {
    blockFilterData = <div className="filter__data">NOT FOUND</div>;
  } else if (filterSlider.valueFilter.rangeMin.index === filterSlider.valueFilter.rangeMax.index) {
    const textData = prefics.concat(String(filterSlider.valueFilter.rangeMin.value));
    blockFilterData = <div className="filter__data">{textData}</div>;
  } else {
    const textDataMin = prefics.concat(String(filterSlider.valueFilter.rangeMin.value));
    const textDataMax = prefics.concat(String(filterSlider.valueFilter.rangeMax.value));
    blockFilterData = (
      <div className="filter__data">
        <div className="filter__data_min"> {textDataMin} </div> ⟷
        <div className="filter__data_max"> {textDataMax} </div>
      </div>
    );
  }

  // console.log(blockFilterData);
  // Number.POSITIVE_INFINITY)

  // const [width, setWidth] = useState(100);

  // // the height of the box
  // const [height, setHeight] = useState(200);

  // // This function is called when the first range slider changes
  // const changeWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setWidth(parseInt(event.target.value, 10) + 10);
  // };

  // // This function is called when the second range slider changes
  // const changeHeight = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setHeight(parseInt(event.target.value, 10));
  // };

  // console.log(filterSlider.listAmount[filterSlider.valueFilter.min]);
  // console.log(filterSlider.valueFilter.max);
  // console.log(filterSlider.listAmount[filterSlider.valueFilter.max]);

  return (
    <section className="filter__slider">
      <div className="filter__slider_title">{filterSlider.title}</div>
      {blockFilterData}
      {/* <div className="filter__data">
        <div className="filter__data_min">
          €{filterSlider.listAmount[filterSlider.valueFilter.min]}
        </div>
        ⟷
        <div className="filter__data_max">
          €{filterSlider.listAmount[filterSlider.valueFilter.max]}
        </div>
      </div> */}
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

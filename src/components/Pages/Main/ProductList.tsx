import React from 'react';
import { ProductItem } from './ProductItem';
import { SortSelect } from '../../UI/Select/SortSelect';

import classes from './ProductList.module.css';
import { IProducts } from '../../../modules/types';

type IProductProps = {
  productList: IProducts[];
  sortSelect: string;
  onChangeSort: (sort: string) => void;
};

export const ProductList = (props: IProductProps): JSX.Element => {
  const { productList } = props;
  const { sortSelect } = props;
  const { onChangeSort } = props;

  return (
    <section className={classes.product}>
      <div className={classes.product__sort}>
        <div className={classes.sort__bar}>
          <SortSelect
            sortSelect={sortSelect}
            onChangeSort={onChangeSort}
            options={[
              { value: 'priceASC', name: 'Sort by price ASC' },
              { value: 'priceDESC', name: 'Sort by price DESC' },
              { value: 'ratingASC', name: 'Sort by rating ASC' },
              { value: 'ratingDESC', name: 'Sort by rating DESC' },
              { value: 'discountPercentageASC', name: 'Sort by discount ASC' },
              { value: 'discountPercentageDESC', name: 'Sort by discount DESC' },
            ]}
          />
        </div>
        <div className={classes.Stat}> Found: {productList.length} </div>
        <div className={classes.SearchBar}>
          <input type="search" placeholder="Search product" className={classes.SearchInput} />
          {/* @import"https://fonts.googleapis.com/css2?family=Philosopher&display=swap";*{margin:0;padding:0;box-sizing:border-box;font-size:calc(.2rem + 1vw);color:orange;font-family:Philosopher,sans-serif;word-wrap:break-word}
a{text-decoration:none}
body{background-image:url(/assets/bg.jpg);background-size:cover;background-repeat:no-repeat}
::-webkit-scrollbar{width:10px}
::-webkit-scrollbar-track{background:orange}
::-webkit-scrollbar-thumb{background-color:#181a1c;border-radius:20px;border:2px solid orange}
input[type=search]::-webkit-search-cancel-button{-webkit-appearance:none;appearance:none;height:1rem;width:1rem;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjEyMy4wNXB4IiBoZWlnaHQ9IjEyMy4wNXB4IiB2aWV3Qm94PSIwIDAgMTIzLjA1IDEyMy4wNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTIzLjA1IDEyMy4wNTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTEyMS4zMjUsMTAuOTI1bC04LjUtOC4zOTljLTIuMy0yLjMtNi4xLTIuMy04LjUsMGwtNDIuNCw0Mi4zOTlMMTguNzI2LDEuNzI2Yy0yLjMwMS0yLjMwMS02LjEwMS0yLjMwMS04LjUsMGwtOC41LDguNQ0KCQljLTIuMzAxLDIuMy0yLjMwMSw2LjEsMCw4LjVsNDMuMSw0My4xbC00Mi4zLDQyLjVjLTIuMywyLjMtMi4zLDYuMSwwLDguNWw4LjUsOC41YzIuMywyLjMsNi4xLDIuMyw4LjUsMGw0Mi4zOTktNDIuNGw0Mi40LDQyLjQNCgkJYzIuMywyLjMsNi4xLDIuMyw4LjUsMGw4LjUtOC41YzIuMy0yLjMsMi4zLTYuMSwwLTguNWwtNDIuNS00Mi40bDQyLjQtNDIuMzk5QzEyMy42MjUsMTcuMTI1LDEyMy42MjUsMTMuMzI1LDEyMS4zMjUsMTAuOTI1eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=);background-size:100% 100%;background-repeat:no-repeat;background-color:orange;border-radius:100%;cursor:pointer} */}
        </div>
        <div className={classes.ViewMode}>
          <div className={classes.small_v}>1</div>
          <div className={classes.big_v}>2</div>
        </div>
      </div>
      <div className={classes.product__list}>
        {productList.length ? (
          productList.map(
            (propsProductItem: IProducts): JSX.Element => (
              <ProductItem propsProductItem={propsProductItem} key={propsProductItem.id} />
            )
          )
        ) : (
          <div className={classes.not__found}>No products found</div>
        )}
      </div>
    </section>
  );
};

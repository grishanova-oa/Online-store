import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CSProduct } from './ProductServis';
import { Query } from './QueryServis';
import { Filters } from './Filters';
import { ProductList } from './ProductList';
import classes from './Product.module.css';
import { IProducts, IFilterSelect } from '../../../modules/types';

interface Imain {
  cartData: IProducts[];
  addToCart: (value: IProducts, isInCart: boolean) => void;
}

export const Products: React.FC<Imain> = ({ cartData, addToCart }) => {
  const products: IProducts[] = CSProduct.getProduct();

  const CSQuery = new Query();

  const [searchParams, setSearchParams] = useSearchParams();

  CSQuery.getQueryString(searchParams);

  // // let productsList: IProducts[] = products.map((e) => e);
  const [productsList, setProductsList] = useState([...products]);

  const [sortSelect, setSortSelect] = useState('');

  const sortProducts = (sort: string) => {
    setSortSelect(sort);
    setProductsList(CSProduct.sortProductsList(productsList, sort));
  };

  const [filterCategory, setFilterCategory] = useState(
    CSProduct.getProductProperty(products, 'category', CSQuery.query.category)
  );
  const changeFilterSelectCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectItem = filterCategory.find((e) => e.name === event.target.name) as IFilterSelect;
    selectItem.isCheck = event.target.checked;
    CSQuery.setQueryFilter('category', filterCategory);
    // setFilterCategory([...filterCategory]);
    setSearchParams(CSQuery.setQueryString(searchParams));
  };

  const [filterBrand, setFilterBrand] = useState(
    CSProduct.getProductProperty(products, 'brand', CSQuery.query.brand)
  );
  const changeFilterSelectBrand = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectItem = filterBrand.find((e) => e.name === event.target.name) as IFilterSelect;
    selectItem.isCheck = event.target.checked;
    CSQuery.setQueryFilter('brand', filterBrand);
    // setFilterBrand([...filterBrand]);
    setSearchParams(CSQuery.setQueryString(searchParams));
  };

  useEffect(() => {
    const listProduct = CSProduct.getProductsList(products, CSQuery.query);

    for (let i = 0; i < filterCategory.length; i += 1) {
      filterCategory[i].available = 0;
    }
    for (let i = 0; i < listProduct.length; i += 1) {
      const el = listProduct[i]['category'] as string;
      const found = filterCategory.find(
        (element) => element.name.toUpperCase() === el.toUpperCase()
      );
      if (found !== undefined) {
        found.available += 1;
      }
    }
    setFilterCategory([...filterCategory]);

    for (let i = 0; i < filterBrand.length; i += 1) {
      filterBrand[i].available = 0;
    }
    for (let i = 0; i < listProduct.length; i += 1) {
      const el = listProduct[i]['brand'] as string;
      const found = filterBrand.find((element) => element.name.toUpperCase() === el.toUpperCase());
      if (found !== undefined) {
        found.available += 1;
      }
    }
    setFilterBrand([...filterBrand]);

    setProductsList(listProduct);
  }, [searchParams]);

  return (
    <section className={classes.products}>
      <Filters
        filterCategory={{
          title: 'Category',
          listFilter: filterCategory,
          onCheckInput: changeFilterSelectCategory,
        }}
        filterBrand={{
          title: 'Brand',
          listFilter: filterBrand,
          onCheckInput: changeFilterSelectBrand,
        }}
      />
      <ProductList
        productList={productsList}
        sortSelect={sortSelect}
        onChangeSort={sortProducts}
        cartData={cartData}
        addToCart={addToCart}
      />
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CSProduct } from './ProductServis';
import { Query } from './QueryServis';
import { Filters } from './Filters';
import { ProductList } from './ProductList';
import classes from './Product.module.css';
import { IProducts, IFilterSelect } from '../../../modules/types';

export const Products = (): JSX.Element => {
  const products: IProducts[] = CSProduct.getProduct();

  const query = new Query();

  const [searchParams, setSearchParams] = useSearchParams();

  query.getQueryString(searchParams);

  // CSProduct.getQuery(query, searchParams);

  // console.log(searchParams);
  // console.log(searchParams.getAll);
  // console.log(searchParams.get('a'));
  // const { id } = useParams();
  // console.log(id);

  // // let productsList: IProducts[] = products.map((e) => e);
  const [productsList, setProductsList] = useState([...products]);

  const [sortSelect, setSortSelect] = useState('');

  const sortProducts = (sort: string) => {
    setSortSelect(sort);
    setProductsList(CSProduct.sortProductsList(productsList, sort));
  };

  const [filterCategory, setFilterCategory] = useState(
    CSProduct.getProductProperty(products, 'category', query.query.category)
  );
  const changeFilterSelectCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectItem = filterCategory.find((e) => e.name === event.target.name) as IFilterSelect;
    selectItem.isCheck = event.target.checked;
    query.setQueryFilter('category', filterCategory);
    // setFilterCategory([...filterCategory]);
    setSearchParams(query.setQueryString(searchParams));
  };

  const [filterBrand, setFilterBrand] = useState(
    CSProduct.getProductProperty(products, 'brand', query.query.brand)
  );
  const changeFilterSelectBrand = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectItem = filterBrand.find((e) => e.name === event.target.name) as IFilterSelect;
    selectItem.isCheck = event.target.checked;
    query.setQueryFilter('brand', filterBrand);
    // setFilterBrand([...filterBrand]);
    setSearchParams(query.setQueryString(searchParams));
  };

  useEffect(() => {
    const listProduct = CSProduct.getProductsList(products, query.query);

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
      <ProductList productList={productsList} sortSelect={sortSelect} onChangeSort={sortProducts} />
    </section>
  );
};

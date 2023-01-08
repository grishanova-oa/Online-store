import React, { useState } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import { CSProduct } from './ProductServis';
import { Filters } from './Filters';
import { ProductList } from './ProductList';
import classes from './Product.module.css';
import { IProducts, IFilterSelect } from '../../../modules/types';

export const Products = (): JSX.Element => {
  const products: IProducts[] = CSProduct.getProduct();

  const [searchParams, setSearchParams] = useSearchParams();

  // console.log(searchParams);
  // console.log(searchParams.getAll);
  // console.log(searchParams.get('a'));
  // const { id } = useParams();
  // console.log(id);

  // // let productsList: IProducts[] = products.map((e) => e);
  const [productsList, setProductsList] = useState(products.map((e) => e));

  const [sortSelect, setSortSelect] = useState('');

  const sortProducts = (sort: string) => {
    setSortSelect(sort);
    setProductsList(CSProduct.sortProductsList(productsList, sort));
  };

  const [filterCategory, setFilterCategory] = useState(
    CSProduct.getProductProperty(products, 'category')
  );
  const changeFilterSelectCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectItem = filterCategory.find((e) => e.name === event.target.name) as IFilterSelect;
    selectItem.isCheck = event.target.checked;
    setFilterCategory([...filterCategory]);
  };
  const [filterBrand, setFilterBrand] = useState(CSProduct.getProductProperty(products, 'brand'));
  const changeFilterSelectBrand = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectItem = filterBrand.find((e) => e.name === event.target.name) as IFilterSelect;
    selectItem.isCheck = event.target.checked;
    setFilterBrand([...filterBrand]);
  };

  // productList = useProduct(products);

  // [productList, setProductList] = useState(products);
  // const products: IProducts[] = [...catalog.products];
  // // console.log(products);
  // const productList: IProducts[] = products.map((e) => e);

  // const [propsProductList, setProductList] = useState(productList);

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

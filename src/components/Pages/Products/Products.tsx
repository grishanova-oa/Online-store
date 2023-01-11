import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CSProduct } from './ProductServis';
// import { Query } from './QueryServis';
import { Filters } from '../../Filters/Filters';
import { ProductList } from './ProductList';
import classes from './Product.module.css';
import { IProducts, IFilterSelect, IQuery } from '../../../modules/types';

interface Imain {
  cartData: IProducts[];
  addToCart: (value: IProducts, isInCart: boolean) => void;
  changePageContent: (newActivePage: string) => void;
  setActiveProduct: (value: IProducts) => void;
  CSQuery: IQuery;
}

export const Products: React.FC<Imain> = ({
  cartData,
  addToCart,
  setActiveProduct,
  changePageContent,
  CSQuery,
}) => {
  const products: IProducts[] = CSProduct.getProduct();
  // const CSQuery = new Query();

  let activeSearchParams = 'null';
  const [searchParams, setSearchParams] = useSearchParams();

  CSQuery.getQueryString(searchParams);

  // // let productsList: IProducts[] = products.map((e) => e);
  const [productsList, setProductsList] = useState([...products]);

  const [sortSelect, setSortSelect] = useState('');

  const sortProducts = (sort: string) => {
    setSortSelect(sort);
    setProductsList(CSProduct.sortProductsList(productsList, sort));
  };

  //-----------------------------------------------------------------------------
  // 'category'
  const [filterCategory, setFilterCategory] = useState(
    CSProduct.getProductProperty(products, 'category', CSQuery.query.category)
  );
  const changeFilterSelectCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectItem = filterCategory.find((e) => e.name === event.target.name) as IFilterSelect;
    selectItem.isCheck = event.target.checked;
    // CSQuery.setQueryFilterSelect('category', filterCategory);
    // CSQuery.setAction('category');
    CSQuery.setQuery('category', filterCategory);
    setSearchParams(CSQuery.setQueryString(searchParams));
  };

  //-----------------------------------------------------------------------------
  // 'brand'
  const [filterBrand, setFilterBrand] = useState(
    CSProduct.getProductProperty(products, 'brand', CSQuery.query.brand)
  );
  const changeFilterSelectBrand = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectItem = filterBrand.find((e) => e.name === event.target.name) as IFilterSelect;
    selectItem.isCheck = event.target.checked;
    // CSQuery.setQueryFilterSelect('brand', filterBrand);
    // setFilterBrand([...filterBrand]);
    CSQuery.setQuery('brand', filterBrand);
    setSearchParams(CSQuery.setQueryString(searchParams));
  };

  //-----------------------------------------------------------------------------
  // 'price'
  const priceAmount = CSProduct.getAmountProperty(products, 'price');
  const [priceFilter, setPriceFilter] = useState({
    rangeMin: { index: 0, value: priceAmount[0] },
    rangeMax: { index: priceAmount.length - 1, value: priceAmount[priceAmount.length - 1] },
  });
  //
  const onChangePrice = (indexInput: number, changeInput: string) => {
    let priceValue = priceFilter;
    // if (changeInput === 'min') {
    console.log(changeInput);
    console.log(indexInput);
    console.log(priceFilter);
    if (changeInput === 'min') {
      if (priceFilter.rangeMax.index < indexInput) {
        priceValue = {
          rangeMin: priceFilter.rangeMin,
          rangeMax: {
            index: indexInput,
            value: priceAmount[indexInput],
          },
        };
      } else {
        priceValue = {
          rangeMin: {
            index: indexInput,
            value: priceAmount[indexInput],
          },
          rangeMax: priceFilter.rangeMax,
        };
      }
    } else if (priceFilter.rangeMin.index > indexInput) {
      priceValue = {
        rangeMin: {
          index: indexInput,
          value: priceAmount[indexInput],
        },
        rangeMax: priceFilter.rangeMax,
      };
    } else {
      priceValue = {
        rangeMin: priceFilter.rangeMin,
        rangeMax: {
          index: indexInput,
          value: priceAmount[indexInput],
        },
      };
    }
    console.log(priceValue);
    // console.log(activeSearchParams);
    CSQuery.setQuery('price', priceValue);
    // activeSearchParams = 'price';
    // console.log(activeSearchParams);
    setSearchParams(CSQuery.setQueryString(searchParams));
    setPriceFilter(priceValue);

    // setPriceFilter(priceValue);
  };

  //-----------------------------------------------------------------------------
  // 'stock'
  const stockAmount = CSProduct.getAmountProperty(products, 'stock');
  const [stockFilter, setStockFilter] = useState({
    rangeMin: { index: 0, value: stockAmount[0] },
    rangeMax: { index: stockAmount.length - 1, value: stockAmount[stockAmount.length - 1] },
  });
  //
  const onChangeStock = (indexInput: number, changeInput: string) => {
    let stockValue = stockFilter;
    if (changeInput === 'min') {
      if (stockFilter.rangeMax.index < indexInput) {
        stockValue = {
          rangeMin: stockFilter.rangeMin,
          rangeMax: {
            index: indexInput,
            value: stockAmount[indexInput],
          },
        };
      } else {
        stockValue = {
          rangeMin: {
            index: indexInput,
            value: stockAmount[indexInput],
          },
          rangeMax: stockFilter.rangeMax,
        };
      }
    } else if (stockFilter.rangeMin.index > indexInput) {
      stockValue = {
        rangeMin: {
          index: indexInput,
          value: stockAmount[indexInput],
        },
        rangeMax: stockFilter.rangeMax,
      };
    } else {
      stockValue = {
        rangeMin: stockFilter.rangeMin,
        rangeMax: {
          index: indexInput,
          value: stockAmount[indexInput],
        },
      };
    }
    CSQuery.setQuery('stock', stockValue);
    setSearchParams(CSQuery.setQueryString(searchParams));
    setStockFilter(stockValue);
  };

  //-----------------------------------------------------------------------------
  // 'search' - Строка поиска
  const [searchProduct, setSearchProduct] = useState(CSQuery.query.search);
  const onChangeSearchProduct = (searchValue: string) => {
    CSQuery.setQuery('search', searchValue);
    activeSearchParams = 'search';
    setSearchParams(CSQuery.setQueryString(searchParams));
  };

  //-----------------------------------------------------------------------------
  // Отбор по запросам
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

    //
    //

    // Устанавливаем фильтр по Price
    if (CSQuery.action !== 'price') {
      let priceValue = {
        rangeMin: { index: 0, value: 0 },
        rangeMax: { index: priceAmount.length - 1, value: Number.POSITIVE_INFINITY },
      };
      if (listProduct.length !== 0) {
        const priceAmountList = CSProduct.getAmountProperty(listProduct, 'price');
        const priceMinIndex = priceAmount.findIndex((price) => price === priceAmountList[0]);
        const priceMinValue = priceAmountList[0];
        const priceMaxIndex = priceAmount.findIndex(
          (price) => price === priceAmountList[priceAmountList.length - 1]
        );
        const priceMaxValue = priceAmountList[priceAmountList.length - 1];
        priceValue = {
          rangeMin: { index: priceMinIndex, value: priceMinValue },
          rangeMax: { index: priceMaxIndex, value: priceMaxValue },
        };
      }
      setPriceFilter(priceValue);
    }

    // Устанавливаем фильтр по Stock
    if (CSQuery.action !== 'stock') {
      let stockValue = {
        rangeMin: { index: 0, value: 0 },
        rangeMax: { index: stockAmount.length - 1, value: Number.POSITIVE_INFINITY },
      };
      if (listProduct.length !== 0) {
        const stockAmountList = CSProduct.getAmountProperty(listProduct, 'stock');
        const stockMinIndex = stockAmount.findIndex((stock) => stock === stockAmountList[0]);
        const stockMinValue = stockAmountList[0];
        const stockMaxIndex = stockAmount.findIndex(
          (stock) => stock === stockAmountList[stockAmountList.length - 1]
        );
        const stockMaxValue = stockAmountList[stockAmountList.length - 1];
        stockValue = {
          rangeMin: { index: stockMinIndex, value: stockMinValue },
          rangeMax: { index: stockMaxIndex, value: stockMaxValue },
        };
      }
      setPriceFilter(stockValue);
    }

    setProductsList(listProduct);
  }, [searchParams]);

  return (
    <section className={classes.products}>
      <Filters
        filterCategory={{
          title: 'Category',
          listFilter: filterCategory,
          onChangeSelect: changeFilterSelectCategory,
        }}
        filterBrand={{
          title: 'Brand',
          listFilter: filterBrand,
          onChangeSelect: changeFilterSelectBrand,
        }}
        filterPrice={{
          title: 'Price',
          range: { min: 0, max: priceAmount.length - 1 },
          valueFilter: priceFilter,
          onChangeSlider: onChangePrice,
        }}
        filterStock={{
          title: 'Stock',
          range: { min: 0, max: stockAmount.length - 1 },
          valueFilter: stockFilter,
          onChangeSlider: onChangeStock,
        }}
      />
      <ProductList
        setActiveProduct={setActiveProduct}
        changePageContent={changePageContent}
        productList={productsList}
        sortSelect={sortSelect}
        onChangeSort={sortProducts}
        cartData={cartData}
        addToCart={addToCart}
        valueSearch={searchProduct}
        onChangeSearchProduct={onChangeSearchProduct}
      />
    </section>
  );
};

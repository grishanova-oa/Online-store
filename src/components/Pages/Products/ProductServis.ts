import { catalog } from '../../../modules/catalog-products';
import { IProducts, IQuerySearchParam } from '../../../modules/types';

interface IFilter {
  name: string;
  isCheck: boolean;
  available: number;
  total: number;
}

export class CSProduct {
  //-----------------------------------------------------------------------------
  // Загрузка каталога товаров в массив
  static getProduct() {
    const products = [...catalog.products];
    return products;
  }

  //-----------------------------------------------------------------------------
  // Получение списка свойств товаров
  static getProductProperty(productsList: IProducts[], property: keyof IProducts, query: string) {
    const filterQuery = query.split('↕');
    const listProperty: IFilter[] = [];
    for (let i = 0; i < productsList.length; i += 1) {
      const nameProperty = productsList[i][property] as string;
      const found = listProperty.find(
        (element) => element.name.toUpperCase() === nameProperty.toUpperCase()
      );
      if (found === undefined) {
        let isCheckFilter = false;
        if (
          filterQuery.length > 0 &&
          filterQuery.findIndex((element) => element === nameProperty) >= 0
        ) {
          isCheckFilter = true;
        }
        listProperty.push({ name: nameProperty, isCheck: isCheckFilter, available: 0, total: 1 });
      } else {
        found.total += 1;
      }
    }
    return listProperty;
  }

  //-----------------------------------------------------------------------------
  // Получение списка товаров отсортированного по фильтрам:
  static getProductsList(products: IProducts[], query: IQuerySearchParam) {
    let filterQuery: string[] | string = query.category.split('↕');
    let productsList = CSProduct.getProductFilterSelect(products, filterQuery, 'category');

    filterQuery = query.brand.split('↕');
    productsList = CSProduct.getProductFilterSelect(productsList, filterQuery, 'brand');

    filterQuery = query.search;
    productsList = CSProduct.getProductFilterSearch(productsList, filterQuery);

    return productsList;
  }

  //-----------------------------------------------------------------------------
  // Фильтр: Select
  static getProductFilterSelect(
    productsList: IProducts[],
    filterSelect: string[],
    property: keyof IProducts
  ) {
    if (productsList === undefined) return productsList;
    if (productsList.length === 0) return productsList;

    if (filterSelect.length === 0 || filterSelect[0] === '') {
      return productsList;
    }

    const listProduct: IProducts[] = [];
    for (let i = 0; i < productsList.length; i += 1) {
      const filterProp = productsList[i][property] as string;
      if (
        filterSelect.findIndex((e) => e.toLocaleUpperCase() === filterProp.toLocaleUpperCase()) >= 0
      ) {
        listProduct.push(productsList[i]);
      }
    }

    return listProduct;
  }

  //-----------------------------------------------------------------------------
  // Фильтр: Search
  static getProductFilterSearch(productsList: IProducts[], filterSearch: string) {
    if (productsList === undefined) return productsList;
    if (productsList.length === 0) return productsList;

    if (filterSearch === '') return productsList;

    const productDescript = (product: IProducts) => {
      return ''.concat(
        product.title,
        product.description,
        String(product.price),
        String(product.discountPercentage),
        String(product.rating),
        String(product.stock),
        product.brand,
        product.category
      );
    };
    return productsList.filter((product) =>
      productDescript(product).toUpperCase().includes(filterSearch.toUpperCase())
    );
  }

  //---
  static sortProductsList(productsList: IProducts[], sort: string) {
    const eSort = ['price', 'rating', 'discountPercentage'];

    if (!sort) {
      return productsList;
    }

    const sortProp = eSort.find((e) => sort.includes(e)) as keyof IProducts;
    const orderSort = sort.replace(sortProp, '');

    const listSort = [...productsList].sort(
      (a, b) => (a[sortProp] as number) - (b[sortProp] as number)
    );
    if (orderSort === 'DESC') {
      listSort.reverse();
    }

    return listSort;
  }

  static getAmountProperty(productsList: IProducts[], property: keyof IProducts) {
    const arrAmount: number[] = [];
    for (let i = 0; i < productsList.length; i += 1) {
      const numb = productsList[i][property] as number;
      if (!arrAmount.includes(numb)) arrAmount.push(numb);
    }
    return arrAmount.sort((a, b) => a - b);
  }

  static getSearchProduct(productsList: IProducts[], valueSearch: string) {
    const productDescript = (product: IProducts) => {
      return ''.concat(product.title).concat(product.description);
    };
    return productsList.filter((product) =>
      productDescript(product).toUpperCase().includes(valueSearch.toUpperCase())
    );
  }
}

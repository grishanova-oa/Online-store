import { catalog } from '../../../modules/catalog-products';
import { IProducts, IQuery } from '../../../modules/types';

interface IFilter {
  name: string;
  isCheck: boolean;
  available: number;
  total: number;
}

export class CSProduct {
  static getProduct() {
    const products = [...catalog.products];
    return products;
  }

  static getProductsList(products: IProducts[], query: IQuery) {
    let filterQuery = query.category.split('↕');
    let productsList = CSProduct.getProductFilterSelect(products, filterQuery, 'category');

    filterQuery = query.brand.split('↕');
    productsList = CSProduct.getProductFilterSelect(productsList, filterQuery, 'brand');

    return productsList;
  }

  static getProductProperty(productsList: IProducts[], property: keyof IProducts, query: string) {
    const filterQuery = query.split('↕');
    const arr: IFilter[] = [];
    for (let i = 0; i < productsList.length; i += 1) {
      const el = productsList[i][property] as string;
      const found = arr.find((element) => element.name.toUpperCase() === el.toUpperCase());
      if (found === undefined) {
        let isCheckFilter = false;
        if (filterQuery.length > 0 && filterQuery.findIndex((e) => e === el) >= 0) {
          isCheckFilter = true;
        }
        arr.push({ name: el, isCheck: isCheckFilter, available: 0, total: 1 });
      } else {
        found.total += 1;
      }
    }
    return arr;
  }

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

  static getProductFilterSelect(
    productsList: IProducts[],
    filterSelect: string[],
    property: keyof IProducts
  ) {
    if (filterSelect.length === 0 || filterSelect[0] === '') {
      return productsList;
    }
    const result: IProducts[] = [];
    for (let i = 0; i < productsList.length; i += 1) {
      const filterProp = productsList[i][property] as string;
      if (
        filterSelect.findIndex((e) => e.toLocaleUpperCase() === filterProp.toLocaleUpperCase()) >= 0
      ) {
        result.push(productsList[i]);
      }
    }
    return result;
  }
}

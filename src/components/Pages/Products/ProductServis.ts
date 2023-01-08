import { catalog } from '../../../modules/catalog-products';
import { IProducts } from '../../../modules/types';

interface IAcc {
  [key: string]: number;
}

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

  static getProductProperty(productsList: IProducts[], property: keyof IProducts) {
    const arr: IFilter[] = [];
    for (let i = 0; i < productsList.length; i += 1) {
      const el = productsList[i][property] as string;
      const found = arr.find((element) => element.name.toUpperCase() === el.toUpperCase());
      if (found === undefined) {
        arr.push({ name: el, isCheck: false, available: 0, total: 1 });
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
}

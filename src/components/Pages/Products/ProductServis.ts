import { catalog } from '../../../modules/catalog-products';
import { IProducts } from '../../../modules/types';

export class CSProduct {
  static getProduct() {
    const products = [...catalog.products];
    return products;
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

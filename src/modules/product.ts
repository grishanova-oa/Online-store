import { catalog } from './catalog-products';
import { IProducts } from './types';

export class Product {
  static getProduct() {
    const products = [...catalog.products];
    return products;
  }

  static sortProductList(productList: IProducts[], sort: string) {
    const eSort = ['price', 'rating', 'discountPercentage'];

    if (!sort) {
      return productList;
    }

    const sortProp = eSort.find((e) => sort.includes(e)) as keyof IProducts;
    const orderSort = sort.replace(sortProp, '');

    const listSort = [...productList].sort(
      (a, b) => (a[sortProp] as number) - (b[sortProp] as number)
    );
    if (orderSort === 'DESC') {
      listSort.reverse();
    }

    return listSort;
  }
}

// export function sortProductList(productList: IProducts[], sort: string) {
//   const eSort = ['price', 'rating', 'discount'];

//   const sortProp = eSort.find((e) => sort.includes(e)) as keyof IProducts;
//   const orderSort = sort.replace(sortProp, '');

//   const listSort = [...productList].sort(
//     (a, b) => (a[sortProp] as number) - (b[sortProp] as number)
//   );
//   if (orderSort === 'DESC') {
//     listSort.reverse();
//   }

//   return listSort;
// }

// export function getProductsList(products: IProducts[], queryProps: string ): string[] {

//   const selectArray = products.reduce((acc, e): string[] => {
//     console.log(e);

//     // if (acc.includes(e[queryProps].value)) {
//     //   return acc;
//     // }
//     return [...acc, e[queryProps]]
//   }, []);

//   return selectArray;

// }

// type RootActionTypesListType = {
//   [key: string]: string | null,
// }
// let RootActionTypes: RootActionTypesListType = {
//   SET_GOODS_LIST_DATA: null,
//   RESET_GOODS_LIST: null
// };
// -- такое определение поможет, если имя ключа будет содержаться в переменной и обращение к элементу будет происходить в виде:

// ?
// 1
// RootActionTypes[keyVlue]

// export function getProductsListProps(products: IProducts[], queryProps: keyof IProducts): void {
//   for (let i = 0; i <= products.length; i += 1) {
//     console.log(products[i][queryProps]);
//   }
// }

// products.reduce((selectArray, e) => {
//   if (selectArray.includes(e[queryProps])) {
//     return selectArray;
//   }
//   return [...selectArray, e[queryProps]]
// }, selectArray);

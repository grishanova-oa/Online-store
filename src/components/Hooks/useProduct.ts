import { useMemo } from 'react';
import { CSProduct } from '../Pages/Products/ProductServis';
import { IProducts } from '../../modules/types';

export const useSortedProduct = (productsList: IProducts[], sort: string) => {
  const listSort = useMemo(() => {
    return CSProduct.sortProductsList(productsList, sort);
  }, [sort, productsList]);
  return listSort;
};

export const useProducts = (productsList: IProducts[], sort: string, query: string) => {
  const listSort = useSortedProduct(productsList, sort);

  const listSortSearch = useMemo(() => {
    return listSort.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()));
  }, [query, listSort]);

  return listSortSearch;
};

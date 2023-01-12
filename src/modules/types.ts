export interface IProducts {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ISelect {
  value: string;
  name: string;
}

export interface ICatalog {
  products: IProducts[];
  total: number;
  skip: number;
  limit: number;
}

export interface IFilterSelect {
  name: string;
  isCheck: boolean;
  available: number;
  total: number;
}

export interface IElementFilterSelect {
  title: string;
  listFilter: IFilterSelect[];
  onChangeSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IFilterRangeValue {
  // valueFilter: {
  rangeMin: { index: number; value: number };
  rangeMax: { index: number; value: number };
  // };
}

export interface IFilterRange {
  title: string;
  prefix: string;
  range: { min: number; max: number };
  valueFilter: IFilterRangeValue;
  onChangeSlider: (valueInput: number, changeInput: string) => void;
}

export interface IQuerySearchParam {
  category: string;
  brand: string;
  price: string;
  stock: string;
  sort: string;
  search: string;
  big: string;
}

export type TypeOfQueryValue = IFilterSelect[] | IFilterRangeValue | string;

export interface IQuery {
  query: IQuerySearchParam;
  action: string;
  getAction(): string;
  setAction(action: string): void;
  getQueryString(searchParams: URLSearchParams): void;
  setQueryString(searchParams: URLSearchParams): URLSearchParams;
  setQueryFilterSelect(propety: keyof IQuerySearchParam, filterSelect: IFilterSelect[]): void;
  setQueryFilterRange(propety: keyof IQuerySearchParam, filterRange: IFilterRangeValue): void;
  setQuerySearch(propety: keyof IQuerySearchParam, valueSearch: string): void;
  setQuery(propety: keyof IQuerySearchParam, valueQuery: TypeOfQueryValue): void;
  setQueryReset(): void;
}

export interface IFilterButton {
  title: string;
  onClickButton: () => void;
}

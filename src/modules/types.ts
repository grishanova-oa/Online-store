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

export interface IElemFilterSelect {
  title: string;
  listFilter: IFilterSelect[];
  onCheckInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// export type TypeOfQuerySelectProduct = {
//   select: string[];
// };
// export interface IQuery {
//   category: string;
// }
// export interface IFilterSelect {
//   title: string;
//   filter: string;
// }
// export interface IPropisFilterSelect {
//   propsFilterSelect: IFilterSelect;
// }

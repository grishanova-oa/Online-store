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

export interface IQuery {
  category: string;
  brand: string;
  price: string;
  stock: string;
  sort: string;
  search: string;
  big: string;
}

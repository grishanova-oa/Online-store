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

export interface ICatalog {
  products: IProducts[];
  total: number;
  skip: number;
  limit: number;
}

// export type TypeOfProducts = { key: string: T};

export type TypeOfQuerySelectProduct = {
  select: string[];
};

export interface IQuery {
  category: string;
}

export interface IFilterSelect {
  title: string;
  filter: string;
}

export interface IPropisFilterSelect {
  propsFilterSelect: IFilterSelect;
}

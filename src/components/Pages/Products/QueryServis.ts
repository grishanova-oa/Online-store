import { IQuery, IFilterSelect } from '../../../modules/types';

export class Query {
  public query: IQuery;

  public constructor() {
    this.query = {
      category: '',
      brand: '',
      price: '',
      stock: '',
      sort: '',
      search: '',
      big: '',
    };
  }

  public getQueryString(searchParams: URLSearchParams) {
    const keysQuery = Object.keys(this.query);
    for (let i = 0; i < keysQuery.length; i += 1) {
      const paramsQuery = searchParams.get(keysQuery[i]);
      if (paramsQuery !== null) {
        const property = keysQuery[i] as keyof IQuery;
        this.query[property] = paramsQuery;
      }
    }
  }

  public setQueryString(searchParams: URLSearchParams) {
    const keysQuery = Object.keys(this.query);
    for (let i = 0; i < keysQuery.length; i += 1) {
      const property = keysQuery[i] as keyof IQuery;
      if (this.query[property] !== '') {
        searchParams.set(keysQuery[i], this.query[property]);
      } else {
        searchParams.delete(keysQuery[i]);
      }
    }
    return searchParams;
  }

  public setQueryFilter(propety: keyof IQuery, filterSelect: IFilterSelect[]) {
    const filters: string[] = [];
    for (let i = 0; i < filterSelect.length; i += 1) {
      if (filterSelect[i].isCheck) filters.push(filterSelect[i].name);
    }
    this.query[propety] = filters.join('↕');
  }
}

import {
  IQuerySearchParam,
  IFilterSelect,
  IFilterRangeValue,
  TypeOfQueryValue,
} from '../../../modules/types';

export class Query {
  public query: IQuerySearchParam;

  public action: string;

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
    this.action = '';
  }

  public getAction() {
    return this.action;
  }

  public setAction(action: string) {
    this.action = action;
  }

  //-----------------------------------------------------------------------------
  //
  public getQueryString(searchParams: URLSearchParams) {
    const keysQuery = Object.keys(this.query);
    for (let i = 0; i < keysQuery.length; i += 1) {
      const paramsQuery = searchParams.get(keysQuery[i]);
      if (paramsQuery !== null) {
        const property = keysQuery[i] as keyof IQuerySearchParam;
        this.query[property] = paramsQuery;
      }
    }
  }

  //-----------------------------------------------------------------------------
  //
  public setQueryString(searchParams: URLSearchParams) {
    const keysQuery = Object.keys(this.query);
    for (let i = 0; i < keysQuery.length; i += 1) {
      const property = keysQuery[i] as keyof IQuerySearchParam;
      if (this.query[property] !== '') {
        searchParams.set(keysQuery[i], this.query[property]);
      } else {
        searchParams.delete(keysQuery[i]);
      }
    }
    return searchParams;
  }

  //-----------------------------------------------------------------------------
  //
  public setQueryFilterSelect(propety: keyof IQuerySearchParam, filterSelect: IFilterSelect[]) {
    const filters: string[] = [];
    for (let i = 0; i < filterSelect.length; i += 1) {
      if (filterSelect[i].isCheck) filters.push(filterSelect[i].name);
    }
    this.query[propety] = filters.join('↕');
  }

  //-----------------------------------------------------------------------------
  //
  public setQueryFilterRange(propety: keyof IQuerySearchParam, filterRange: IFilterRangeValue) {
    let rangeMin = filterRange.rangeMin.value;
    let rangeMax = filterRange.rangeMax.value;
    if (rangeMin > rangeMax) {
      rangeMin = filterRange.rangeMax.value;
      rangeMax = filterRange.rangeMin.value;
    }
    this.query[propety] = ''.concat(String(rangeMin), '↕', String(rangeMax));
  }

  //-----------------------------------------------------------------------------
  //
  public setQuerySearch(propety: keyof IQuerySearchParam, valueSearch: string) {
    this.query[propety] = valueSearch;
  }

  public setQueryReset() {
    this.action = '';
    const keysQuery = Object.keys(this.query);
    for (let i = 0; i < keysQuery.length; i += 1) {
      const property = keysQuery[i] as keyof IQuerySearchParam;
      this.query[property] = '';
    }
  }

  //-----------------------------------------------------------------------------
  //
  public setQuery(propety: keyof IQuerySearchParam | string, valueQuery?: TypeOfQueryValue) {
    this.setAction(propety);

    switch (propety) {
      case 'category':
        this.setQueryFilterSelect(propety, valueQuery as IFilterSelect[]);
        break;

      case 'brand':
        this.setQueryFilterSelect(propety, valueQuery as IFilterSelect[]);
        break;

      case 'price':
        this.setQueryFilterRange(propety, valueQuery as IFilterRangeValue);
        break;

      case 'stock':
        this.setQueryFilterRange(propety, valueQuery as IFilterRangeValue);
        break;

      case 'sort':
        break;

      case 'search':
        this.setQuerySearch(propety, valueQuery as string);
        break;

      case 'big':
        break;

      default:
        this.setQueryReset();
    }
  }
}

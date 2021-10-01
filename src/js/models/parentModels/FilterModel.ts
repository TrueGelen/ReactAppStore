import {
  BOOL_FILTER_TYPENAME,
  LIST_FILTER_TYPENAME,
  RANGE_FILTER_TYPENAME,
} from "../../utils/constants/constants";

export default abstract class FilterModel<T> {
  protected values: T;

  constructor(values: T) {
    this.values = values;
  }

  getValues() {
    return this.values;
  }
}

export class ListFilterModel extends FilterModel<Array<string | number>> {
  get typename() {
    return LIST_FILTER_TYPENAME;
  }
}

export class BoolFilterModel extends FilterModel<Array<string | number>> {
  get typename() {
    return BOOL_FILTER_TYPENAME;
  }
}

export class RangeFilterModel extends FilterModel<Array<string | number>> {
  get typename() {
    return RANGE_FILTER_TYPENAME;
  }
}

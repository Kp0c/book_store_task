import { BaseSeriesDiscount } from './base-series-discount';

export class FourBooksDiscount extends BaseSeriesDiscount {
  get seriesLength(): number {
    return 4;
  }
  get discountValue(): number {
    return .2;
  }
}
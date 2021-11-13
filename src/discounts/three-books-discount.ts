import { BaseSeriesDiscount } from './base-series-discount';

export class ThreeBooksDiscount extends BaseSeriesDiscount {
  get seriesLength(): number {
    return 3;
  }

  get discountValue(): number {
    return .1;
  }
}
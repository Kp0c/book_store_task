import { BaseSeriesDiscount } from './base-series-discount';

export class TwoBooksDiscount extends BaseSeriesDiscount {
  get seriesLength(): number {
    return 2;
  }
  get discountValue(): number {
    return .05;
  }
}
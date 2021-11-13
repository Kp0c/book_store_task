import { IDiscount } from '../interfaces';
import { BaseSeriesDiscount } from './base-series-discount';

export class FiveBooksDiscount extends BaseSeriesDiscount {
  get seriesLength(): number {
    return 5;
  }
  get discountValue(): number {
    return .25;
  }
}
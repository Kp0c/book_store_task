import { TwoBooksDiscount } from './discounts/two-books.discount';
import { FiveBooksDiscount } from './discounts/five-books-discount'
import { FourBooksDiscount } from './discounts/four-books-discount';
import { ThreeBooksDiscount } from './discounts/three-books-discount';
import { ICartCalculator, IDiscount } from './interfaces'

export class CartCalculator implements ICartCalculator {
  private readonly BOOK_PRICE = 8;
  private discounts: IDiscount[] = [
    new FiveBooksDiscount(),
    new FourBooksDiscount(),
    new ThreeBooksDiscount(),
    new TwoBooksDiscount(),
  ];

  calculate(books: number[]): number {
    return this.getMinPrice({
      books,
      currentIndex: 0,
      currentPrice: 0,
      currentMinPrice: Number.POSITIVE_INFINITY,
    });
  }

  /**
   * Recursively applies all possible combinations of discounts and returns the minimal possible price
   */
  private getMinPrice(info: IterationInfo): number {
    if (info.currentIndex === this.discounts.length) {
      const finalPrice = info.currentPrice + this.getFullPriceOfBooks(info.books);
      return Math.min(finalPrice, info.currentMinPrice);
    }

    const howManyTimesCanApply = this.discounts[info.currentIndex].howManyTimesCanApply(info.books);

    for (let discountsApplied = 0; discountsApplied <= howManyTimesCanApply; discountsApplied++) {
      const newInfo = this.applyDiscountXTimes(info, discountsApplied);

      newInfo.currentIndex++;
      info.currentMinPrice = Math.min(this.getMinPrice(newInfo), newInfo.currentMinPrice);
    }

    return Number(info.currentMinPrice.toFixed(2));
  }

  private getFullPriceOfBooks(books: number[]): number {
    return books.reduce((acc, val) => acc + val * this.BOOK_PRICE, 0);
  }

  private applyDiscountXTimes(info: IterationInfo, times: number): IterationInfo {
    let newInfo: IterationInfo = {
      ...info,
      books: [...info.books],
    };

     for (let index = 0; index < times; index++) {
       let { price, updatedBooks } = this.discounts[newInfo.currentIndex].apply(this.BOOK_PRICE, newInfo.books);
       newInfo.currentPrice += price;
       newInfo.books = updatedBooks;
     }

     return newInfo;
  }

}

interface IterationInfo {
  books: number[];
  currentIndex: number;
  currentPrice: number;
  currentMinPrice: number;
}
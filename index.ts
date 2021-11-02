import { CartCalculator } from './src/cart-calculator';

export function total(books: number[]): number {
  if (!Array.isArray(books)) {
    throw Error('items must be an array');
  }

  if (books.length !== 5) {
    throw Error('Array must have length of 5');
  }

  if (books.some((bookCount) => bookCount < 0)) {
    throw Error('Array must not contain negative numbers');
  }

  return new CartCalculator().calculate(books);
}

export interface ICartCalculator {
  calculate(books: number[]): number;
}

export interface IDiscount {
  howManyTimesCanApply(books: number[]): number;

  apply(price: number, books: number[]): { price: number, updatedBooks: number[] };
}
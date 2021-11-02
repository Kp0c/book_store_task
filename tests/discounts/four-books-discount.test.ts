import { FourBooksDiscount } from '../../src/discounts/four-books-discount';

describe('four books discount', () => {
  describe('howManyTimesCanApply', () => {
    test('should return 5 for [5, 6, 5, 7, 0]', () => {
      const discount = new FourBooksDiscount();

      expect(discount.howManyTimesCanApply([5, 6, 5, 7, 0])).toBe(5);
    });
    
    test('should return 2 for [2, 2, 2, 1, 1]', () => {
      const discount = new FourBooksDiscount();

      expect(discount.howManyTimesCanApply([2, 2, 2, 1, 1])).toBe(2);
    });

    test('should return 2 for [4, 3, 1, 1, 2]', () => {
      const discount = new FourBooksDiscount();

      expect(discount.howManyTimesCanApply([4, 3, 1, 1, 2])).toBe(2);
    })
  });

  describe('apply', () => {
    test('should decrement books and apply 20% discount', () => {
      const discount = new FourBooksDiscount();

      const { price, updatedBooks } = discount.apply(8, [2, 2, 2, 2, 1]);

      expect(price).toBe(25.6);
      expect(updatedBooks).toEqual([1, 1, 1, 1, 1]);
    })
  });
});
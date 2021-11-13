import { FiveBooksDiscount } from '../../src/discounts/five-books-discount'

describe('five books discount', () => {
  describe('howManyTimesCanApply', () => {
    test('should return 5 for [5, 7, 5, 8, 5]', () => {
      const discount = new FiveBooksDiscount();

      expect(discount.howManyTimesCanApply([5, 7, 5, 8, 5])).toBe(5);
    });
    
    test('should return 0 for [5, 5, 5, 5, 0]', () => {
      const discount = new FiveBooksDiscount();

      expect(discount.howManyTimesCanApply([5, 5, 5, 5, 0])).toBe(0);
    });
  });

  describe('apply', () => {
    test('should decrement every book and apply 25% discount', () => {
      const discount = new FiveBooksDiscount();

      const { price, updatedBooks } = discount.apply(8, [1, 1, 1, 1, 1]);

      expect(price).toBe(30);
      expect(updatedBooks).toEqual([0, 0, 0, 0, 0]);
    })
  });
});
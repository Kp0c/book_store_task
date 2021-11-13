import { ThreeBooksDiscount } from '../../src/discounts/three-books-discount';

describe('three books discount', () => {
  describe('howManyTimesCanApply', () => {
    test('should return 3 for [3, 3, 3, 0, 0]', () => {
      const discount = new ThreeBooksDiscount();

      expect(discount.howManyTimesCanApply([3, 3, 3, 0, 0])).toBe(3);
    });
    
    test('should return 7 for [5, 7, 4, 3, 2]', () => {
      const discount = new ThreeBooksDiscount();

      -expect(discount.howManyTimesCanApply([5, 7, 4, 3, 2])).toBe(7);
    });
  });

  describe('apply', () => {
    test('should decrement books and apply 10% discount', () => {
      const discount = new ThreeBooksDiscount();

      const { price, updatedBooks } = discount.apply(8, [2, 2, 2, 2, 1]);

      expect(price).toBe(21.6);
      expect(updatedBooks).toEqual([1, 1, 1, 2, 1]);
    })
  });
});
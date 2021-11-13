import { TwoBooksDiscount } from '../../src/discounts/two-books.discount';

describe('two books discount', () => {
  describe('howManyTimesCanApply', () => {
    test('should return 2 for [2, 2, 0, 0, 0]', () => {
      const discount = new TwoBooksDiscount();

      expect(discount.howManyTimesCanApply([2, 2, 0, 0, 0])).toBe(2);
    });
    
    test('should return 10 for [5, 7, 4, 3, 2]', () => {
      const discount = new TwoBooksDiscount();

      -expect(discount.howManyTimesCanApply([5, 7, 4, 3, 2])).toBe(10);
    });
  });

  describe('apply', () => {
    test('should decrement books and apply 5% discount', () => {
      const discount = new TwoBooksDiscount();

      const { price, updatedBooks } = discount.apply(8, [2, 2, 2, 2, 1]);

      expect(price).toBe(15.2);
      expect(updatedBooks).toEqual([1, 1, 2, 2, 1]);
    })
  });
});
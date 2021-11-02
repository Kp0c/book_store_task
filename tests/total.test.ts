import { total } from '..';

describe('calculator', () => {
  test('should fail if not an array', () => {
    expect(() => total(1 as any)).toThrowError();
  });

  test('should fail if array length is not 5', () => {
    expect(() => total([1, 2, 3, 4])).toThrowError();

    expect(() => total([1, 2, 3, 4, 5, 6])).toThrowError();
  });

  test('should fail if array contains negative numbers', () => {
    expect(() => total([1, 2, 3, 4, -1])).toThrowError();
  });
  
  test('[0, 0, 0, 0, 0] should result in 0.00', () => {
    expect(total([0, 0, 0, 0, 0])).toBe(0.00);
  });
  
  test('[2, 2, 2, 1, 1] should result in 51.20', () => {
    expect(total([2, 2, 2, 1, 1])).toBe(51.20);
  });
  
  test('[0, 0, 0, 0, 0] should result in 0', () => {
    expect(total([0, 0, 0, 0, 0])).toBe(0);
  });
  
  test('[1, 0, 0, 0, 0] should result in 8', () => {
    expect(total([1, 0, 0, 0, 0])).toBe(8);
  });
  
  test('[1, 1, 0, 0, 0] should result in 15.20', () => {
    expect(total([1, 1, 0, 0, 0])).toBe(15.20);
  });
  
  test('[1, 1, 1, 0, 0] should result in 21.60', () => {
    expect(total([1, 1, 1, 0, 0])).toBe(21.60);
  });
  
  test('[1, 1, 1, 1, 0] should result in 25.60', () => {
    expect(total([1, 1, 1, 1, 0])).toBe(25.60);
  });
  
  test('[1, 1, 1, 1, 1] should result in 30.00', () => {
    expect(total([1, 1, 1, 1, 1])).toBe(30.00);
  });
  
  test('[3, 2, 1, 1, 1] should result in 53.20', () => {
    expect(total([3, 2, 1, 1, 1])).toBe(53.20);
  });
  
  test('[2, 2, 1, 1, 1] should result in 45.20', () => {
    expect(total([2, 2, 1, 1, 1])).toBe(45.20);
  });
  
  test('[3, 7, 9, 6, 4] should result in 189.20', () => {
    expect(total([3, 7, 9, 6, 4])).toBe(189.20);
  });

  test('[4, 3, 1, 1, 2] should result in 74.40', () => {
    expect(total([4, 3, 1, 1, 2])).toBe(74.40);
  });
  
  test('[9, 8, 1, 1, 7] should result in 182.40', () => {
    expect(total([9, 8, 1, 1, 7])).toBe(182.40);
  });
})
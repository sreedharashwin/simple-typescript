import { sum } from './utils';

describe('utils', () => {
  describe('sum()', () => {
    it('should return sum of 2 numbers', () => {
      expect(sum(2, 3)).toEqual(5);
    });
  });
});

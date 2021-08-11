import { getNumberTerms } from '../utils';

describe('Utils tests', () => {

  it('should return max terms <= 10', () => {

    const terms = [];
    const numbers = [17, 7, 102, 21];
    const expectedTerms = [
      { 10: 1, 7: 1 },
      { 7: 1 },
      { 10: 10, 2: 1 },
      { 10: 2, 1: 1}
    ];

    numbers.forEach(number => terms.push(getNumberTerms(number, 10)));

    expect(terms).toEqual(expectedTerms);
  });
})
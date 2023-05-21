import { merge } from '../scripts/merge';
import { expect, describe, it } from 'vitest';

describe('merge function test', () => {
  //Data expamples:
  const exampleListA = [1, 1, 6, 7, 7, 9];
  const exampleListB = [1, 2, 3, 3, 4, 6, 8];
  const exampleResultList = [1, 1, 1, 2, 3, 3, 4, 6, 6, 7, 7, 8, 9];

  it('should return sorted result list of numbers', () => {
    expect(merge(exampleListA, exampleListB)).toStrictEqual(exampleResultList);
  });
});

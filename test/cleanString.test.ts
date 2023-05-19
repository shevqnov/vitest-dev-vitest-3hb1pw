import { cleanString } from '../scripts/cleanString';
import { describe, it, expect } from 'vitest';

describe('cleanString function test', () => {
  const testString = 'abcabcabc';

  it('should return correct string for one repeat', () => {
    expect(cleanString(testString, 1)).toBe('abc');
  });

  it('should return correct string for two repeats', () => {
    expect(cleanString(testString, 2)).toEqual('abcabc');
  });
});

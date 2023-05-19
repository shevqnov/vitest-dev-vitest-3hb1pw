import { get } from '../scripts/get';
import { describe, it, expect } from 'vitest';

describe('get function test', () => {
  const testObject = {
    nested: {
      null: null,
    },
    big: {
      red: {
        apple: 'big red apple',
      },
    },
  };

  it('should return expected string', () => {
    expect(get(testObject, 'big.red.apple')).toBe(testObject.big.red.apple);
  });

  it('should return nested object', () => {
    expect(get(testObject, 'big.red')).toBe(testObject.big.red);
  });

  it('should return "undefined"', () => {
    expect(get(testObject, 'foo.bar')).toBeUndefined();
    expect(get({}, 'foo.bar')).toBeUndefined();
  });

  it('should return null', () => {
    expect(get(testObject, 'nested.null')).toBeNull();
  });
});

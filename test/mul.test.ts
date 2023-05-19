import { mul } from '../scripts/mul';
import { describe, it, expect } from 'vitest';

describe('mul fn test', () => {
  it('should returns correct value', () => {
    expect(mul(2, 3)).toBe(6);
  });
});

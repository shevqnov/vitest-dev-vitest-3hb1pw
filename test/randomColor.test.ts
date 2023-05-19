import { getRandomColor } from '../scripts/randomColor';
import { describe, it, expect } from 'vitest';

describe('random color function test', () => {
  const color = getRandomColor();
  it('should return some valid rgb color', () => {
    expect(color).toHaveLength(3);
    color.forEach((c) => {
      expect(c).toBeLessThan(255);
    });
  });
});

export function getRandomColor(): [number, number, number] {
  const max = 255;
  return [getRandomInt(max), getRandomInt(max), getRandomInt(max)];
}

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

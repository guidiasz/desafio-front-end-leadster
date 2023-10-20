export function chunkIntoN<T>(arr: T[], n: number) {
  const size = Math.ceil(arr.length / n);
  return Array.from({ length: n }, (v, i) => arr.slice(i * size, i * size + size));
}
export function range(start: number, end?: number, step: number = 1) {
  let output = [];

  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
}

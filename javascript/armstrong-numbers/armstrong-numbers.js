export const validate = num =>
  num ===
  num
    .toString()
    .split('')
    .reduce((acc, val, _, arr) => acc + val ** arr.length, 0);

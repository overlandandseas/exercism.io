export const isIsogram = str => {
  const set = new Set();
  const arr = str.toLowerCase().match(/[a-z]/g);

  return !arr || arr.every(letter => set.has(letter) ? false : set.add(letter))
};

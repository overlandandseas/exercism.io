const COMPLEMENTS = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

export const toRna = dna => {
  if (dna.length < 2) {
    return dna ? COMPLEMENTS[dna] : '';
  }
  return dna
    .split('')
    .map(val => COMPLEMENTS[val])
    .join('');
};

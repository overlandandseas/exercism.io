export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
];

export const value = colorArr => {
  const solutionStr = colorArr.reduce(
    (acc, value, index) =>
      index >= 2 ? acc : `${acc}${COLORS.indexOf(value)}`,
    ''
  );
  return Number(solutionStr);
};

const MILLISECONDS_IN_GIGASECOND = 1000000000000;

export const gigasecond = date => {
  const milliseconds = date.getTime();
  return new Date(milliseconds + MILLISECONDS_IN_GIGASECOND);
};

const BIN_MAP = ['wink', 'double blink', 'close your eyes', 'jump'];

export const secretHandshake = num => {
  if (typeof num !== 'number') {
    throw new Error('Handshake must be a number');
  }

  let arr = [];

  num
    .toString(2)
    .split('')
    .reverse()
    .forEach((val, index) => {
      if (parseInt(val) === 1) {
        if (index === 4) {
          arr = arr.reverse();
        } else {
          arr.push(BIN_MAP[index]);
        }
      }
    });

  return arr;
};

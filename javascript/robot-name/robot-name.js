const NAMES = new Set();

function getRandomCaptialLetter() {
  return String.fromCharCode(65 + ~~(Math.random() * 26));
}

function pad(n) {
  return ('000' + n.toString()).slice(-3);
}

function getRandom3DigitNumber() {
  return pad(~~(Math.random() * 1000));
}

function getName() {
  return `${getRandomCaptialLetter()}${getRandomCaptialLetter()}${getRandom3DigitNumber()}`;
}

function getNewName() {
  // Throws "Maximum call stack size exceeded" error on final test when using recursion
  // const name = `${getRandomCaptialLetter()}${getRandomCaptialLetter()}${getRandom3DigitNumber()}`;
  // if (NAMES.has(name)) {
  //   return getNewName();
  // }
  // NAMES.add(name);
  // return name;

  let name = getName();

  while (NAMES.has(name)) {
    name = getName();
  }
  NAMES.add(name);
  return name;
}

export class Robot {
  constructor() {
    this._name = getNewName();
  }

  get name() {
    return this._name;
  }

  reset() {
    this._name = getNewName();
  }
}

Robot.releaseNames = () => {
  NAMES.clear();
};

export const ArgumentError = new Error('Invalid Operation');

export class WordProblem {
  constructor(str) {
    this._problem = str;
  }

  answer() {
    let numbers = [];
    let operation;
    const words = this._problem.split(' ');
    const start = words.findIndex(i => !isNaN(i));
    if (start === -1) {
      throw ArgumentError;
    }
    for (let c = start; c < words.length; c++) {
      const val = words[c];
      if (val.includes('?')) {
        const num = val.split('?')[0];
        if (!isNaN(num)) {
          numbers.push(Number(num));
        }
        break;
      }

      if (!isNaN(val)) {
        numbers.push(Number(val));
      } else {
        if (operation) {
          numbers = [performOperation(numbers, operation)];
        }
        if (words[c + 1] === 'by') {
          c++;
        }

        operation = val;
      }
    }
    return performOperation(numbers, operation);
  }
}

function performOperation(nums, op) {
  const opFuncs = {
    plus: (acc, val) => acc + val,
    multiplied: (acc, val) => acc * val,
    minus: (acc, val) => acc - val,
    divided: (acc, val) => acc / val
  };

  if (typeof opFuncs[op] !== 'function') {
    throw ArgumentError;
  }
  return nums.reduce(opFuncs[op], nums.shift());
}

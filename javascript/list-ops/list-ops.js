export class List {
  constructor(arr) {
    this._arr = arr || [];
  }

  append(list) {
    return new List([...this._arr, ...list.values]);
  }

  concat(listofLists) {
    return listofLists.foldl((acc, list) => acc.append(list), this);
  }

  filter(func) {
    const arr = [];
    for (var c = 0; c < this._arr.length; c++) {
      const val = this._arr[c];
      if (func(val, c, this)) {
        arr.push(val);
      }
    }
    return new List(arr);
  }

  map(func) {
    const arr = [];
    for (var c = 0; c < this._arr.length; c++) {
      arr.push(func(this._arr[c], c, this));
    }
    return new List(arr);
  }

  length() {
    return this._arr.length;
  }

  foldl(func, acc) {
    for (var c = 0; c < this._arr.length; c++) {
      acc = func(acc, this._arr[c], c, this);
    }
    return acc;
  }

  foldr() {
    return this.reverse().foldl(...arguments);
  }

  reverse() {
    const arr = [];
    for (var c = this._arr.length - 1; c >= 0; c--) {
      arr.push(this._arr[c]);
    }
    return new List(arr);
  }

  get values() {
    return [...this._arr];
  }
}

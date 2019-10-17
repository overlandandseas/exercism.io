export class LinkedList {

  constructor() {
    this._list = [];
  }

  push() {
    return this._list.push(...arguments);
  }

  pop() {
    return this._list.pop(...arguments);
  }

  shift() {
    return this._list.shift(...arguments);
  }

  unshift() {
    return this._list.unshift(...arguments);
  }

  delete(value) {
    if (this._list.includes(value)) {
      this._list.splice(this._list.indexOf(value), 1);
    }
  }

  count() {
    return this._list.length;
  }
}

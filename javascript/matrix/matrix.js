export class Matrix {

  constructor(input) {
    const extra = [];

    this._rows = input.split('\n').map(val => val.split(' ').map(Number));

    this._columns = this._rows.map((value, index, arr) => {
      let column = [];
      value.forEach((val, idx) => {
        if (!arr[idx]) {
          extra.push(val);
        } else {
          column.push(arr[idx][index]);
        }
      });
      return column;
    });

    if(extra.length) {
      this._columns.push(extra);
    }
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }
}

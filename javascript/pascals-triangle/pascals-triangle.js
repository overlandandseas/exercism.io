export class Triangle {
  constructor(num) {
    if (!num) {
      this.rows = [];
      return;
    }

    this._rows = [[1]];
    for (let index = 2; index <= num; index++) {
      this._rows.push(
        new Array(index)
          .fill()
          .map(
            (_, idx) =>
              (this._rows[index - 2][idx - 1] || 0) +
              (this._rows[index - 2][idx] || 0)
          )
      );
    }
  }

  get lastRow() {
    return this.rows[this.rows.length - 1];
  }

  get rows() {
    return this._rows;
  }
}

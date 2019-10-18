export class Cipher {
  constructor(str) {
    this._secret = str;
  }

  encode(str) {
    if (!this._secret){
      this._secret = str;
    }

    return str
      .split('')
      .map((letter, index) =>
        String.fromCharCode(
          (letter.charCodeAt(0) +
            this._secret.charCodeAt(index % this._secret.length) -
            194) %
            26 +
            97
        )
      )
      .join('');
  }

  decode(str) {
    return str
      .split('')
      .map((letter, index) =>
        String.fromCharCode(
          (letter.charCodeAt(0) -
            this._secret.charCodeAt(index % this._secret.length) +
            26) %
            26 +
            97
        )
      )
      .join('');
  }

  get key() {
    return this._secret;
  }
}

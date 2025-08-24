export default class HolbertonClass {
  constructor(size, location) {
    this._location = location;
    this._size = size;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](hint) { 
    if (hint === 'string') {
      return this._location;
    }
    if (hint === 'number') {
      return this._size;
    }
    return this._size;
  }
}

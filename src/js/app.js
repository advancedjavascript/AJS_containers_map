export default class ErrorRepository {
  constructor() {
    this.map = new Map([
      [1, 'Error: uncorrect name.'],
      [2, 'Error: uncorrect type.'],
    ]);
  }

  translate(code) {
    let output = ' ';
    if (this.map.has(code)) {
      output = this.map.get(code);
    }
    if (output === ' ') {
      output = 'Unknown error.';
    }
    return output;
  }
}

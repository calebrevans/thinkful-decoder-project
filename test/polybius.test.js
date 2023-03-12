const { expect } = require('chai');
const { polybius } = require('../src/polybius.js');

describe('polybius()', () => {
  it('should encode a message properly', () => {
    const input = 'hello world';
    const expectedOutput = '3251131343 2543241341';
    const actualOutput = polybius(input);
    expect(actualOutput).to.equal(expectedOutput);
  });

  it('should decode a message properly', () => {
    const input = '3251131343 2543241341';
    const expectedOutput = 'hello world';
    const actualOutput = polybius(input, false);
    expect(actualOutput).to.equal(expectedOutput);
  });

  it('should encode "i" and "j" to the same value', () => {
    const input = 'jinx';
    const expectedOutput = '42423335';
    const actualOutput = polybius(input);
    expect(actualOutput).to.equal(expectedOutput);
  });

  it('should decode the same value to both "i" and "j"', () => {
    const input = '42423335';
    const expectedOutput = '(i/j)(i/j)nx';
    const actualOutput = polybius(input, false);
    expect(actualOutput).to.equal(expectedOutput);
  });

  it('should return false if decoding an odd number of characters', () => {
    const input = '3251131343 254324134';
    const actualOutput = polybius(input, false);
    expect(actualOutput).to.be.false;
  });
});

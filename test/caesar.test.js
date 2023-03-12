const expect = require("chai").expect
const caesarModule = require('../src/caesar.js');

describe('caesar', () => {
  it('returns false if shift is not provided', () => {
   expect(caesarModule.caesar('hello')).to.equal(false);
  });

  it('returns false if shift is less than -25', () => {
   expect(caesarModule.caesar('hello', -26)).to.equal(false);
  });

  it('returns false if shift is greater than 25', () => {
    expect(caesarModule.caesar('hello', 26)).to.equal(false);
  });

  it('encodes input string with positive shift', () => {
    expect(caesarModule.caesar('hello', 3)).to.equal('khoor');
  });

  it('encodes input string with negative shift', () => {
    expect(caesarModule.caesar('hello', -3)).to.equal('ebiil');
  });

  it('decodes input string with positive shift', () => {
   expect(caesarModule.caesar('khoor', 3, false)).to.equal('hello');
  });

  it('decodes input string with negative shift', () => {
    expect(caesarModule.caesar('ebiil', -3, false)).to.equal('hello');
  });

  it('handles characters that are not letters', () => {
    expect(caesarModule.caesar('hello, world!', 3)).to.equal('khoor, zruog!');
  });
});

const expect = require('chai').expect;
const { substitution } = require('../src/substitution');

describe('substitution', () => {
  it('should encode a message properly', () => {
    const input = 'hello world';
    const alphabet = 'xoyqmcgrukswaflnthdjpzibev';
    const expected = 'rmwwl ilhwq';
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });

  it('should decode a message properly', () => {
    const input = 'rmwwl ilhwq';
    const alphabet = 'xoyqmcgrukswaflnthdjpzibev';
    const expected = 'hello world';
    const actual = substitution(input, alphabet, false);
    expect(actual).to.equal(expected);
  });

  it('should return false if the given alphabet is invalid', () => {
    const input = 'hello world';
    const alphabet = 'xoyqmcgrukswaflnthdjpzib';
    const expected = false;
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });

  it('should return false if the given alphabet is not 26 characters long', () => {
    const input = 'hello world';
    const alphabet = 'xoyqmcgrukswaflnthdjpzibevabc';
    const expected = false;
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });

  it('should handle special characters properly', () => {
    const input = 'hello, world!';
    const alphabet = 'xoyqmcgrukswaflnthdjpzibev';
    const expected = 'rmwwl, ilhwq!';
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });

  it('should handle uppercase letters properly', () => {
    const input = 'HELLO WORLD';
    const alphabet = 'xoyqmcgrukswaflnthdjpzibev';
    const expected = 'rmwwl ilhwq';
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });
});



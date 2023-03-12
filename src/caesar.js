const caesarModule = (function () {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
      // Define a helper function to get the shifted index of a letter
    function getShiftedIndex(letter, encode, shift) {
      const lowerCaseLetter = letter.toLowerCase();
      const index = alphabet.indexOf(lowerCaseLetter);
      if (index === -1) {
        // The character is not a letter, return the original character
        return letter;
      }
      // Get the shifted index of the letter
      let shiftedIndex = encode ? index + shift : index - shift;
      if (shiftedIndex > 25) {
        shiftedIndex -= 26;
      } else if (shiftedIndex < 0) {
        shiftedIndex += 26;
      }
      // Return the shifted letter in the original case
      return alphabet[shiftedIndex]
    }
  
  function caesar(input, shift, encode = true) {
    // Check if shift is valid
    if (!shift || shift < -25 || shift > 25) {
      return false;
    }
    // Apply the shift to each character in the input
    return input.split('').map(char => getShiftedIndex(char, encode, shift)).join('');
  }

  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };

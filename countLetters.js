function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`🤢🤢🤢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
}


function countLetters(input) {
  let result = {};
  input = input.toLowerCase();

  for (letter of input) {
    if (letter !== ' ') {
      if (result[letter]) {
        result[letter]++;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
}


console.log(countLetters('icing'));
console.log(countLetters('Icing'));
console.log(countLetters('nik Is cool'));
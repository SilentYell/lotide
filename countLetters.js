function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`🤢🤢🤢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
}


function countLetters(input) {
  let result = {};
  
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

let result = countLetters('Foot work');
assertEqual(result['o'], 3);
assertEqual(result['F'], 1);
assertEqual(result[''], undefined);
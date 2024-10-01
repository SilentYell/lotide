const { split } = require("lodash");

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`🤢🤢🤢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
}


function countLetters(input) {
  let result = {};


}







console.log(countLetters('icing'));
console.log(countLetters('Icing'));
console.log(countLetters('nik is a cool guy i think'));

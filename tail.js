const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤢🤢🤢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1).toString();
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"].toString());
assertEqual(result.toString(), ["Lighthouse"].toString());
assertEqual(result.toString(), [].toString());
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
const empty = tail([]);
assertEqual(empty.toString(), [].toString());
const oneItem = tail([3]);
assertEqual(oneItem.toString(), [6].toString());
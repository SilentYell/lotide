const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤢🤢🤢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//take two arrays and returns TRUE or FALSE based on a perfect match
function eqArrays(arr1, arr2) {
  if (arr1.toString() === arr2.toString()) {
    return true;
  }
  else {
    return false;
  }
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([], [1, 2, 3]), true); //fail
assertEqual(eqArrays([1], [1]), true); //pass
assertEqual(eqArrays(['solid'], ['solid']), true); //pass
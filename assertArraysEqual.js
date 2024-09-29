function eqArrays(arr1, arr2) {
  return arr1.toString() === arr2.toString();
}

//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console..
function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🤢 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🚫 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 4]); // => should FAIL
assertArraysEqual([], []); // => should PASS
assertArraysEqual([1, 2, 3], [1, '2', 3]); // => should FAIL
assertArraysEqual(['a', 'y', 'c'], ['a', 'b', 'f']); // => should PASS
assertArraysEqual(['a', 'b', 'c'], ['a', 'b', 'c']); // => should PASS
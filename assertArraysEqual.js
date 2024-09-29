function eqArrays(arr1, arr2) {
  return arr1.toString() === arr2.toString();
}

function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🤢 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🚫 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 4]);
assertArraysEqual([], []);
assertArraysEqual([1, 2, 3], [1, '2', 3]);
assertArraysEqual(['a', 'y', 'c'], ['a', 'b', 'f']);
assertArraysEqual(['a', 'b', 'c'], ['a', 'b', 'c']);
// Implement without which will return a subset of a given array, removing unwanted elements.
function eqArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🤢 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🚫 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

function without(source, itemsToRemove) {
  const result = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
}



const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


assertArraysEqual(without([1, 2, 3, 4], [2, 3]), [1, 4]);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
assertArraysEqual(without([], [1]), []);
assertArraysEqual(without([4, 5, 6, 7, 8], [6, 4]), [5, 7]);

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🤢 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🚫 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


//Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

const flatten = function(array) {
  let flatArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatArray = flatArray.concat(array[i]);
    } else {
      flatArray.push(array[i]);
    }
  }
  console.log(flatArray);
};


flatten([1, 2, ['combo'], 'of', ['string']]);
flatten([1, 2, [3, 4], 5, [6]]);
flatten([1, 2, [4], 5, []]);
flatten([[3, 4],[6]]);

module.exports = flatten;
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


const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    console.log(
      `🤢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(
      `🚫 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const obj1 = {first: 1, second: 2, third: 3};
const obj2 = {first: ['vegemite'], second: 2, third: 3};

assertObjectsEqual(obj1, {first: 1, second: 2, third: 3});
assertObjectsEqual(obj1, {first: 1, second: 22, third: 3});
assertObjectsEqual(obj2, {first: ['vegemite'], second: 2, third: 3});
assertObjectsEqual(obj2, {first: ['marmite'], second: 2, third: 3});


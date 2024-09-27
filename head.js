const _ = require('lodash');

const head = function(array) {
  return _.head(array);
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤢🤢🤢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};


assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([null]), 45);
assertEqual(head([]), 56);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤢🤢🤢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  //give array without the first number
  let newArr = [];
  for (let i = 1; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
};

const result = tail(["Hello", "Lighthouse", "Labs"]); // should return ["Lighthouse", "Labs"]
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
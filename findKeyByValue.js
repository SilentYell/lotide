const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🤢🤢🤢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const findKeyByValue = function(showObj, value) {
  //convert input into lower case
  const lowerCase = value.toLowerCase();

  //scan object for a key with the same value as value
  for (let key in showObj) {
    //comparing the lower case version of the object key value to the lower case function value
    if (showObj[key].toLowerCase() === lowerCase) {
      //return the original correct object key value
      return key;
    }
  }
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};



assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "the expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "the EXPANSe"), "sci_fi");
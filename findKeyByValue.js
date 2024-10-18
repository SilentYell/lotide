const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤢🤢🤢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const findKeyByValue = function(showObj, value) {
  const lowerCase = value.toLowerCase();

  for (let key in showObj) {
    if (showObj[key].toLowerCase() === lowerCase) {
      return key;
    }
  }
};


const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "the expanse"), "sciFi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "the EXPANSe"), "sciFi");

module.exports = findKeyByValue;
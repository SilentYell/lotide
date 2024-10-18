const eqArrays = function(arr1, arr2) {
  if (arr1.toString() === arr2.toString()) {
    return true;
  } else {
    return false;
  }
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤢🤢🤢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
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


const videoGames = {
  zelda: 'adventure',
  mario: 'platformer',
  halo: 'shooter',
};

const moreVideoGames = {
  halo: 'shooter',
  zelda: 'adventure',
  mario: 'platformer',
};

assertEqual(eqObjects(videoGames, moreVideoGames), true);

const anotherVideoGamesList = {
  zelda: 'adventure',
  mario: 'platformer',
  halo: 'shooter',
  borderlands: 'shooter',
  inscryption: 'puzzle'
};

assertEqual(eqObjects(videoGames, anotherVideoGamesList), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};

assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

const unorderedVideoGames = {
  mario: 'platformer',
  halo: 'shooter',
  zelda: 'adventure'
};

assertEqual(eqObjects(videoGames, unorderedVideoGames), true);

module.exports = eqObjects;
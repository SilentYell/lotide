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
    if (object1[key] !== object2[key]) {
      return false;
    } else {
      return true;
    }
  }
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



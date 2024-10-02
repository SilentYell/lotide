const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤢🤢🤢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqObjects = function(object1, object2) {};



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

assertEqual(eqObjects(videoGames, moreVideoGames));

const anotherVideoGamesList = {
  zelda: 'adventure',
  mario: 'platformer',
  halo: 'shooter',
  borderlands: 'shooter',
  inscryption: 'puzzle'
};

assertEqual(eqObjects(videoGames, anotherVideoGamesList));
assertEqual(eqObjects(videoGames, anotherVideoGamesList));



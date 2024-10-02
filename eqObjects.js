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
  borderlands: 'shooter',
  elden_ring: 'adventure',
  hollow_knight: 'platformer'
};

eqObjects(videoGames, moreVideoGames);





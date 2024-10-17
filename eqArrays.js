const eqArrays = function(arr1, arr2) {
  if (arr1.toString() === arr2.toString()) {
    return true;
  } else {
    return false;
  }
};

module.exports = eqArrays;
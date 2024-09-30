function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}


function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🤢 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🚫 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}


function middle(array) {
  let arrMid = [];
  if (array.length < 3) {
    return arrMid;
  }
  if (array.length % 2 === 0) {
    arrMid.push(array[Math.floor(array.length / 2) - 1]);
    arrMid.push(array[Math.floor(array.length / 2)]);
  } else {
    arrMid.push(array[Math.floor(array.length / 2)]);
  }
  return arrMid;
}

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));
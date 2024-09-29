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


//For arrays with one or two elements, there is no middle. Return an empty array.

function middle(array) {
  
}

// make new array variable
let arrMid = [];
//check for array with greater then 2 elements
if (arrMid.length > 2 ) {
  return arrMid;
} 

//check if even or odd array length

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`🤢🤢🤢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
}


function countLetters(input) {
  
  let result = {};

  for (letters of input) {
    //replace the spaces with nothing if the string has spaces
    letters.replace(' ', '');
    //split the string into individual letters into a new array
    letters.split('');
    //looping through the letters array
    for (let i = 1; i < letters.length; i++) {
      //creating variable for key letter and value number to be added to result obj
      //test letter should start as the first letter of letters array
      let testLetter = letters[0];
      //count should start at 1 since the first letter will be stored already
      let count = 1;
      //
      if (testLetter !== letters[i]) {
        //testLetter should be changed to the letters[i] value
        testLetter = letters[i];
        //count should reset to 1
        count = 1;
        //add the letter and count number to the result obj
        result.testLetter = count;
      } else {
        //count should increase
        count ++;
          //add the letter and count number to the result obj
          result.testLetter = count;
      }
    }
    //return the result object
    return result;
  }
}


console.log(countLetters('icing'));//{i: 2, c: 1, n: 1, g: 1}
console.log(countLetters('Icing'));
console.log(countLetters('nik is a cool guy i think'));

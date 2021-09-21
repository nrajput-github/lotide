/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("Assertion Failed: " + actual + " !== " + expected);
  }
};
*/

const countLetters = function(myString) {
  let myObject = {};
  for (let element of myString) {
    if (element !== ' ') {
      if (myObject[element]) {
        myObject[element]++;
      } else {
        myObject[element] = 1;
      }
    }
  }

  return myObject;

};
module.exports = countLetters;
//const result = countLetters("lighthouse in the house");
//assertEqual(result["l"], 1);
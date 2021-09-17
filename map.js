//Our map function will take in two arguments:

//An array to map
//A callback function

const words = ["ground", "control", "to", "major", "tom"];

/*const results1 = words.map(word => word[0]);
console.log(results1);*/

/*
const map = function(arr, func) {
  const results = [];
for (let i = 0; i < arr.length ; i++) {
  results.push(func(arr[i]));
}
  return results;
}
*/
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  let result = eqArrays(actual, expected);
  if (result) {
    console.log("Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("Assertion Failed: " + actual + " !== " + expected);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

const results2 = map(words, word => word[1]);
assertArraysEqual(results2, [ 'r', 'o', 'o', 'a', 'p' ]);

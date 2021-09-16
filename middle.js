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

const middle = function(arr) {
  let midIndex;
  let myArr = [];
  //length 0 1 2 empty array
  if (arr.length <= 2)
    return myArr;

  midIndex = arr.length / 2;
  if (arr.length % 2 === 0) {
    myArr.push(arr[midIndex - 1]);
    myArr.push(arr[midIndex]);
  } else {
    myArr.push(arr[midIndex]);
  }
  return myArr;
    
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
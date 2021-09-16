const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("Assertion Failed: " + actual + " !== " + expected);
  }
};
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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let len1 = Object.keys(object1).length;
  let len2 = Object.keys(object2).length;
  let value1, value2;
  let found = false;
  if (len1 !== len2)
    return false;

  for (const key1 in object1) {
    if (Object.hasOwnProperty.call(object1, key1)) {
      value1 = object1[key1];
    }
    found = false;
    for (const key2 in object2) {
      if (Object.hasOwnProperty.call(object2, key2)) {
        value2 = object2[key2];
        if ((key1 === key2) && (eqArrays(value1, value2)))
          found = true;
      }
    }
    if (found === false)
      return false;
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
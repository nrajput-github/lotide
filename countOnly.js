const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("Assertion Failed: " + actual + " !== " + expected);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let myObject = {};
  let count  = 0;
  for (let element in itemsToCount) {
    count = 0;
    if (itemsToCount[element] === true) {
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i] === element)
          count++;
      }
      if (count) {
        myObject[element] = count;
      }
    }
  }

  return myObject;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
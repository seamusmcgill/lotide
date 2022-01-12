const assertEqual = function(actual, expected) {
  // Output passing/failing messages (emojis included)
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x2705)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let output = {};
  // Loop through object to find items to count
  for (const value in itemsToCount) {
    if (itemsToCount[value]) {
      console.log("Item to be counted: ", value);
      // Check if item is in the array
      for (const item of allItems) {
        if (item === value) {
          // Add count to output object
          if (output[value]) {
            output[value]++;
          } else {
            output[value] = 1;
          }
        }
      }
    }
  }
  return output;
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
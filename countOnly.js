const countOnly = function(allItems, itemsToCount) {
  let output = {};
  // Loop through array
  for (const item of allItems) {
    // Check if item returns true in itemsToCount
    if (itemsToCount[item]) {
      // Add count to output object
      if (output[item]) {
        output[item]++;
      } else {
        output[item] = 1;
      }
    }
  }
  return output;
};

module.exports = countOnly;

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
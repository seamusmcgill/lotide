const letterPositions = function(sentence) {
  let output = {};
  // Loop through letter
  for (let i = 0; i < sentence.length; i++) {
    // Skip to end of loop if there's a space
    if (sentence[i] === " ") {
      continue;
    }
    // Add indices to letters in object
    if (!output[sentence[i]]) {
      output[sentence[i]] = [i];
      continue;
    }
    output[sentence[i]].push(i);
  }
  return output;
};

module.exports = letterPositions;
// console.log(letterPositions("lighthouse in the house")["h"]);
// assertArraysEqual(letterPositions("lighthouse in the house")["h"], [3, 5, 15, 18]);
// assertArraysEqual([1,2,3], [1,2,3,4,5]);
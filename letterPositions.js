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
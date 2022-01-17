const without = function(source, itemsToRemove) {
  // Create empty output array
  let output = [];
  // Loop through source and itemsToRemove arrays
  source.forEach(element => {
    for (let i = 0; i < itemsToRemove.length; i++) {
      // If element is in itemsToRemove splice it from the array
      if (element === itemsToRemove[i]) {
        break;
      }
      if (i === itemsToRemove.length - 1) {
        output.push(element);
      }
    }
  });
  return output;
};

module.exports = without;

// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// assertArraysEqual(without(["Hey", "there", "champ"], ["champ", 4, "3"]), ["Hey", "there"]);
// assertArraysEqual(without([1, 4, 2, 3, 2, 4], [2, 4]), [1, 3]);
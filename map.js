const map = function(array, callback) {
  const results = [];
  for (const element of array) {
    results.push(callback(element));
  }
  return results;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];
// assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
// assertArraysEqual(map([1000], element => element / 2), [500]);
// assertArraysEqual(map([], element => element * 2), []);
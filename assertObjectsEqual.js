const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  // Ensure objects print properly
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`${String.fromCodePoint(0x2705)} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

// assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });

// const bestTVShowsByGenre = {
//   // eslint-disable-next-line camelcase
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// const raptorsStarters = {
//   C: "Pascal Siakam",
//   PF : "Scottie Barnes",
//   SF: "OG Anunoby",
//   SG: "Gary Trent Jr.",
//   PG: "Fred VanVleet",
// };

// const raptorsStartersShuffle = {
//   PG: "Fred VanVleet",
//   SF: "OG Anunoby",
//   C: "Pascal Siakam",
//   PF: "Scottie Barnes",
//   SG: "Gary Trent Jr.",
// };

// assertObjectsEqual(bestTVShowsByGenre, raptorsStarters);
// assertObjectsEqual(raptorsStarters, raptorsStartersShuffle);
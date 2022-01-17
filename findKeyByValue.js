const findKeyByValue = function(object, value) {
  // Loop through object
  for (const key in object) {
    // If value found in object return key
    if (object[key] === value) {
      return key;
    }
  }
  // Return undefined if not found
  return undefined;
};

module.exports = findKeyByValue;

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

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(raptorsStarters, "Pascal Siakam"), "C");
// assertEqual(findKeyByValue(raptorsStarters, "Chris Boucher"), undefined);

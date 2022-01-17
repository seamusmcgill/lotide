const findKey = function(object,callback) {
  // Loop through object
  for (const item in object) {
    // Check if value satisfies callback condition
    if (callback(object[item])) {
      return item;
    }
  }
  return undefined;
};

module.exports = findKey;

// const raptorsStarters = {
//   C: "Pascal Siakam",
//   PF : "Scottie Barnes",
//   SF: "OG Anunoby",
//   SG: "Gary Trent Jr.",
//   PG: "Fred VanVleet",
// };
// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma");

// assertEqual(findKey(raptorsStarters, x => x.includes("Scottie")), "PF");
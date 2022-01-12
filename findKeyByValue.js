const assertEqual = function(actual, expected) {
  // Output passing/failing messages (emojis included)
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x2705)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${actual} !==  ${expected}`);
  }
};

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

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const raptorsStarters = {
  C: "Pascal Siakam",
  PF : "Scottie Barnes",
  SF: "OG Anunoby",
  SG: "Gary Trent Jr.",
  PG: "Fred VanVleet",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(raptorsStarters, "Pascal Siakam"), "C");
assertEqual(findKeyByValue(raptorsStarters, "Chris Boucher"), undefined);

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
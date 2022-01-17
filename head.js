const head = function(array) {
  // Check if array is empty
  if (!array.length) {
    return undefined;
  }
  // Return first value in array
  return array[0];
};

module.exports = head;
const tail = function(array) {
  // Check if array is empty
  if (!array.length) {
    return undefined;
  }
  // Create empty array to store tail values
  let arrayTail = [];
  // Add all values except the head
  for (let i = 1; i < array.length; i++) {
    arrayTail.push(array[i]);
  }
  return arrayTail;
};

module.exports = tail;
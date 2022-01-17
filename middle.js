const middle = function(array) {
  let output = [];
  if (array.length < 3) {
    return output;
  }
  let middle = ((array.length) - 1) / 2;
  if (!Number.isInteger(middle)) {
    output.push(array[middle - 0.5], array[middle + 0.5]);
  } else {
    output.push(array[middle]);
  }
  return output;
};

module.exports = middle;
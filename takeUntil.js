const takeUntil = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0, i);
    }
  }
  return array;
};

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];


// assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
// assertArraysEqual(takeUntil(data2, x => x === ","), [ "I've", 'been', 'to', 'Hollywood' ]);
// assertArraysEqual(takeUntil([1,4,2], x => x > 4), [1,4,2]);
// assertArraysEqual(takeUntil([], x => x === " "), []);

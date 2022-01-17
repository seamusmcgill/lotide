const assertArraysEqual = require("../assertArraysEqual");

// TEST CASES
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([1, "two", 3], [1, 2, 3]);
assertArraysEqual([1, [2, 3, 4, [5, [6]], 7], 8], [1, [2, 3, 4, [5, [6]], 7], 8]);
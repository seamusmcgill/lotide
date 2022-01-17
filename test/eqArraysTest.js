const expect = require("chai").expect;
const eqArrays = require("../eqArrays");

// TEST CASES

describe("#eqArrays", () => {
  it("should return true when equivalent arrays are passed in", () => {
    let result = eqArrays([1, 2, 3], [1, 2, 3]);
    let expected = true;
    expect(result).to.deep.equal(expected);
  });

  it("should return true when equivalent nested arrays are passed in", () => {
    let result = eqArrays([1, [2, [3, 4, 5, [1], 2], 33], 4], [1, [2, [3, 4, 5, [1], 2], 33], 4]);
    let expected = true;
    expect(result).to.deep.equal(expected);
  });

  it("should return true when two empty arrays are passed in", () => {
    let result = eqArrays([], []);
    let expected = true;
    expect(result).to.deep.equal(expected);
  });

  it("should return false when non-matching arrays are passed in", () => {
    let result = eqArrays([1, "2", 3], [1, 2, 3]);
    let expected = false;
    expect(result).to.deep.equal(expected);
  });

  it("should return false when non-equivalent nested arrays are passed in", () => {
    let result = eqArrays([1, [2, [3, 4], 5], 6], [1, [2, [3, 3], 5], 6]);
    let expected = false;
    expect(result).to.deep.equal(expected);
  });

});
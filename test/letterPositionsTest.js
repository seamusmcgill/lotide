const expect = require("chai").expect;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("should return an object whose keys are letters and values are all indices the letter occurs in the input sentence ", () => {
    let result = letterPositions("hello");
    let expected = { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] };
    expect(result).to.deep.equal(expected);
  });

  it("should return an empty object if an empty string is inputted", () => {
    let result = letterPositions("");
    let expected = {};
    expect(result).to.deep.equal(expected);
  });
});
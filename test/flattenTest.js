const expect = require("chai").expect;
const flatten = require("../flatten");

describe("#flatten", () => {
  it("returns [ 1, 2, 3, 4, 5, 6 ] for [1, 2, [3, 4], 5, [6]]", () => {
    let result = flatten([1, 2, [3, 4], 5, [6]]);
    let expected = [ 1, 2, 3, 4, 5, 6 ];
    expect(result).to.deep.beequal(expected);
  });

  it("returns [] for []", () => {
    let result = flatten([]);
    let expected = [];
    expect(result).to.deep.equal(expected);
  });
});

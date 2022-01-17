const expect = require("chai").expect;
const eqObjects = require("../eqObjects");

// TEST CASES

describe("#eqObjects", () => {
  it("should return true when equivalent objects are passed in", () => {
    let result = eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" });
    let expected = true;
    expect(result).to.deep.equal(expected);
  });

  it("should return true when equivalent nested objects are passed in", () => {
    let result = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
    let expected = true;
    expect(result).to.deep.equal(expected);
  });

  it("should return true when objects with nested arrays are passed in", () => {
    let result = eqObjects({ d: ["2", 3], c: "1" }, { c: "1", d: ["2", 3] });
    let expected = true;
    expect(result).to.deep.equal(expected);
  });

  it("should return true when two empty objects are passed in", () => {
    let result = eqObjects({}, {});
    let expected = true;
    expect(result).to.deep.equal(expected);
  });

  it("should return false when objects of different lengths are passed in", () => {
    let result = eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" });
    let expected = false;
    expect(result).to.deep.equal(expected);
  });

  it("should return false when non-equivalent objects are passed in", () => {
    let result = eqObjects({ a: "1", b: "2" }, { a: "1", c: "2"});
    let expected = false;
    expect(result).to.deep.equal(expected);
  });

  it("should return false when non-equivalent nested objects are passed in", () => {
    let result = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 2 }, b: 2 });
    let expected = false;
    expect(result).to.deep.equal(expected);
  });


});
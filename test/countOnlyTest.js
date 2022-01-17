const expect = require("chai").expect;
const countOnly = require("../countOnly");

describe("#countOnly", () => {
  it("should return an object with number counts of names that are true in itemsToCount", () => {
    let result = countOnly(["Seamus", "Joseph", "Elon", "Joseph", "Michael"], { "Joseph": true, "Seamus": false });
    let expected = {"Joseph": 2};
    expect(result).to.deep.equal(expected);
  });

  it("should return undefined for names that are false in itemsToCount", () => {
    let result = countOnly(["Seamus", "Joseph", "Elon", "Joseph", "Michael"], { "Joseph": true, "Seamus": false })["Seamus"];
    let expected = undefined;
    expect(result).to.deep.equal(expected);
  });

  it("should return undefined for names that are not in the array", () => {
    let result = countOnly(["Seamus", "Joseph", "Elon", "Joseph", "Michael"], { "Joseph": true, "Seamus": false })["Doug"];
    let expected = undefined;
    expect(result).to.deep.equal(expected);
  });
});
const expect = require("chai").expect;
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  it("should return the object key whose value matches the inputted value", () => {
    let result = findKeyByValue({
      C: "Pascal Siakam",
      PF : "Scottie Barnes",
      SF: "OG Anunoby",
      SG: "Gary Trent Jr.",
      PG: "Fred VanVleet",
    }, "Pascal Siakam");
    let expected = "C";
    expect(result).to.deep.equal(expected);
  });

  it("should return undefined if the inputted value isn't found", () => {
    let result = findKeyByValue({
      C: "Pascal Siakam",
      PF : "Scottie Barnes",
      SF: "OG Anunoby",
      SG: "Gary Trent Jr.",
      PG: "Fred VanVleet",
    }, "Chris Boucher");
    let expected = undefined;
    expect(result).to.deep.equal(expected);
  });

});
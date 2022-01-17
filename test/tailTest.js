const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("should return undefined for []", () => {
    assert.deepEqual(tail([]), undefined);
  });

  it("should return [Labs, Bootcamp] for [Lighthouse, Labs, Bootcamp]", () => {
    assert.deepEqual(tail(["Lighthouse", "Labs", "Bootcamp"]), ["Labs", "Bootcamp"]);
  });

  it("should return [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
});
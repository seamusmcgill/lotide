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

// // TEST CASES
// let words = ["Lighthouse", "Labs", "Web", "Development", "Bootcamp"];
// let result = tail(words);
// assertEqual(result.length, words.length - 1);
// for (let j = 0; j < words.length - 1; j++) {
//   assertEqual(result[j], words[j + 1]);
// }

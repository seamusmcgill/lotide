const assertEqual = require("../assertEqual");
const tail = require("../tail");

// TEST CASES
let words = ["Lighthouse", "Labs", "Web", "Development", "Bootcamp"];
let result = tail(words);
assertEqual(result.length, words.length - 1);
for (let j = 0; j < words.length - 1; j++) {
  assertEqual(result[j], words[j + 1]);
}

const { findKey } = require(".");

const findKeyByValue = function(obj, val) {
  let keys = Object.keys(obj);
  for (let each of keys) {
    if (obj[each] === val) {
      return each;
    }
  }
};

/* const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
}; */

module.exports = findKeyByValue;

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
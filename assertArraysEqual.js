const _ = require('./index');

const assertArraysEqual = function(actual, expected) {
  if (_.eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed, the arrays are a perfect match.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed, the arrays are not a perfect match.`);
  }
};
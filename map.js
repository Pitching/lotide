const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["gester", "cgainst", "to", "mives", "tog"];
const words3 = ["only", "two"];

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed, the arrays are a perfect match.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed, the arrays are not a perfect match.`);
  }
};

const eqArrays = function(array1, array2) {
  let matches = 0;
  let i;

  if (array1.length === array2.length) {
    for (i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        matches++;
      }
    }
  }
  if (i === matches) {
    return true;
  } else {
    return false;
  }
}

const map = function(array, callback) {
  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
}

const results1 = map(words, word => word[0]);
const results2 = map(words2, word => word[0]);

assertArraysEqual(results1, results2);
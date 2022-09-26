const takeUntil = function(array, callback) {
  const final = [];
  
  for (let each of array) {
    if(!callback(each)) {
      final.push(each);
    } else {
      return final;
    }
  }

  return final;
}

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

module.exports = takeUntil;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Hollywood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
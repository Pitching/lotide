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

const middle = function(midArray) {
  if (midArray.length <= 2) {
    return [];
  } else if (midArray.length % 2 !== 0) {
    const mid = Math.ceil(midArray.length/2 - 1);
    return midArray[mid];
  } else {
    const midtwo = midArray.length/2;
    return midArray.slice(midtwo - 1, midtwo + 1);
  }
}

assertArraysEqual(middle([1, 2, 3]), middle([1, 2, 3]));
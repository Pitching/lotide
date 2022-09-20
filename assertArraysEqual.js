const assertEqual = function(result) {
  if (result) {
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]));
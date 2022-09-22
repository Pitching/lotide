const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  let idkey = "";

  for (let key in object) {
    callback(object[key]);
    if(callback(object[key])) {
      idkey = key;
      return idkey;
    }
  }

  return undefined;
}

const testObject = {
  "First": { stars: 3 },
  "Second":   { stars: 6 },
  "Third":      { stars: 2 },
  "Fourth":   { stars: 17 },
  "Fifth":       { stars: 5 },
  "Sixth":  { stars: 17 }};

assertEqual(findKey(testObject, x => x.stars === 17), "Fourth");
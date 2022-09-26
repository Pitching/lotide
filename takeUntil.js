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

module.exports = takeUntil;

/* const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Hollywood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]); */
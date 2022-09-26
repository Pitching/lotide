// const words = ["ground", "control", "to", "major", "tom"];
// const words2 = ["gester", "cgainst", "to", "mives", "tog"];
// const words3 = ["only", "two"];

const map = function(array, callback) {
  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
}

module.exports = map;

// const results1 = map(words, word => word[0]);
// const results2 = map(words2, word => word[0]);

// assertArraysEqual(results1, results2);
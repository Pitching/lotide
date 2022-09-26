const without = function(source, itemsToRemove) {
  let newArr = source;
  for (let i = 0; i < source.length; i++) {
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (source[i] === itemsToRemove[y]) {
        newArr.splice(i, 1);
      }
    }
  }

  return console.log(newArr);
}

module.exports = without;

/* without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]); */
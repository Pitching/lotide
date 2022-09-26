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

module.exports = middle;
const assertEqual = require('./assertEqual');

const tail = function(last) {
  let removeFirst = [];

  for (let i = 1; i < last.length; i++) {
    removeFirst[i - 1] = last[i];
  }

  return console.log(removeFirst);
};

module.exports = tail;
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const lowerSentence = sentence.toLowerCase().split(' ').join('');
  let letters = {};
  for (let l of lowerSentence) {
    if (!letters[l]) {
      letters[l]=0;
    }letters[l]++;
  }
  return letters;
}

console.log(countLetters('LHL is a space no space'));
const min = function(numbers) {
  let smallest = numbers[0];

  for (let number of numbers) {
    if (number < smallest) {
      smallest = number;
    }
  }

  return smallest;
}
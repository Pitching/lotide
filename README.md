# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @Pitching/lotide`

**Require it:**

`const _ = require('@Pitching/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(string)`: Counts the amount of times each letter shows up in a set string
* `countOnly(object, itemsToCount)`: Counts only the items provided in itemsToCount from a specified object
* `eqArrays(array1, array2)`: counts each similar occurance in the array, and if all values match returns a true
* `eqObjects(object1, object2)`: counts each similar occurance in the object, and if all values match returns a true
* `findKeyByValue(object1, value)`: Function takes an object and value, scans the object and returns the first key that contains set value
* `findKey(object1, callback)`: Function takes an object and a callback. Scans the object and returns the first key for which the callback returns a truthy value
* `head(arr)`: Function takes an array and returns the first value of the array
* `letterPositions(string)`: Function takes a string and shows the relative array value of each letter that occurs
* `map(array, callback)`: The function takes an array and a callback and returns a new array based on the results of the callback function
* `middle(array)`: The function takes an array and returns the middle value (if odd length) or the middle 2 values (if even)
* `min(array)`: The function takes an array of numbers and returns the smallest value in the array
* `tail(array)`: The function takes an array and removes the first value, returning the count of the remaining values in the array
* `takeUntil(array, callback)`: The function takes an array and a callback and returns a slice of the array with variables taken from the start, loops until callback returns truthy
* `without(array, itemsToRemove)`: The function takes an array and itsmToRemove array and removes unwanted elements of the given array before returning the new values
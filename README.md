# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @seamusmcgill/lotide`

**Require it:**

`const _ = require('@seamusmcgill/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(...)`: description
* `function2(...)`: description
* `function3(...)`: description
* `head(array)`: Return the head element of an array 
* `tail(array)`: Return the tail elements of an array
* `middle(array)`: Return the middle elements of an array
* `assertEqual(actual, expected)`: Print assertion of equality between primitive values
* `assertArraysEqual(actual, expected)`: Print assertion of equality between two arrays
* `assertObjectsEqual(actual, expected)`: Print assertion of equality between two objects
* `countLetters(sentence)`: Return an object with the letter counts for each letter in a sentence
* `countOnly(allItems, itemsToCount)`: Given an array of items (allItems), count the number of instances of values that have a "true" value in the itemsToCount object
* `eqArrays(array1, array2)`: Return true if two arrays are deeply equal
* `eqObjects(object1, object2)`: Return true if two objects are deeply equal
* `findKey(object, callback)`: Return key from object whose value satisfies given callback condition
* `findKeyByValue(object, value)`: Return key from object whose value is equal to input value
* `flatten(array)`: Flatten an array with elements that are nested arrays. Only handles one level of nesting. 
* `letterPositions(sentence)`: Return an object with the indices of each ocurrence of letters in a sentence
* `map(array, callback)`: Return a new array containing the elements of the input array as transformed by the callback function
* `takeUntil(array, callback)`: Return an array that contains the elements up until the element in the input array that satisfied the callback condition
* `without(source, itemsToRemove)`: Return a subset of a given array, removing unwanted elements
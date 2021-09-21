const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')

assertArraysEqual([1, 3, 4], [1, 3, 4]);
assertArraysEqual([1, 3, 4], [4, 3, 4]);
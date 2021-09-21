/*
const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');

const result = tail(["Hello", "Lighthouse", "Labs"]);

assertArraysEqual(result, ["Lighthouse", "Labs"]);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);


assertArraysEqual(words.length, 3);
*/

const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
 it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']",
 ()  =>{
   const result = tail(["Hello", "Lighthouse", "Labs"]);
   assert.deepEqual(result, ["Lighthouse", "Labs"]);
 });
 it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']",
 ()  =>{
   const result = tail(["Yo Yo", "Lighthouse", "Labs"]);
   assert.deepEqual(result, ["Lighthouse", "Labs"]);
 });
});

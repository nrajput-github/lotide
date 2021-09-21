
const tail = require('../tail');
const assertEqual = require('../assertEqual');

const result = tail(["Hello", "Lighthouse", "Labs"]);


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(result, ["Lighthouse", "Labs"]);

assertEqual(words.length, 3);
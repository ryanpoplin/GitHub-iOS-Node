"use strict";

const english = require("./english");
const spanish = require("./spanish");
const testGreet = require("./test.greet");
const anotherGreet = require("./test.greet").anotherHello;
const greetr = require("./new");
const greetness = require("./greetness");

module.exports = {
    english: english,
    spanish: spanish,
    testGreet: testGreet,
    anotherGreet: anotherGreet,
    greetr: greetr,
    greetness: greetness
};
"use strict";

// const greet = require("./greet");
// greet();

// function Hacker(alias, favLang) {
//     this.alias = alias;
//     this.favLang = favLang;
// }

// Hacker.prototype.greet = require("./greet");

// const hacker = new Hacker("Byrdann Fox", "JavaScript");
// console.log(hacker);
// console.log(hacker.greet());
// console.log(hacker.__proto__);

// const neoHacker = new Hacker("Neo", "C++");

// // console.log(hacker.__proto__ === neoHacker.__proto__)

// const primitiveValue = "Node.js v4.3.2 LTS"; // primitives are passed by value
// // a different value is created in memory and placed into passByValue constant
// // the value is copied into memory
// const passByValue = primitiveValue;

// // the value created and stored in referenceType is the same exact memory value as referneceType store
// const referenceType = {
//     "test": "value"
// };
// const passByReference = referenceType;

// console.log(passByValue === primitiveValue);
// console.log(passByReference === referenceType);

// function change(b) {
//     // b is now a new value in memory; a copy
//     b = 2;
// }
// // this is referring to another space in memory
// var a = 1;
// // keep the execution context in mind
// a = 2;
// change(a);
// console.log(a);

// // pass by reference
// function changeObj(d) {
//     d.prop1 = function() {};
//     d.prop2 = {};
// }
// var c = {};
// c.prop1 = {};
// changeObj(c);
// console.log(c.prop1);
// console.log(c.prop2);

// // useful for scope considerations
// // scope 1
// var firstName = "Ryan";
// (function(lastName) {
//     // scope 2
//     console.log(lastName);
//     var firstName = "Byrdann";
//     console.log(firstName);
// }("Fox"));
// console.log(firstName);

// const moduleExample = require("./greet");
// console.log(moduleExample);

// console.log("first");
// // setTimeout adds the callback to the queue after the delay
// // this does not execute right after delay is over
// // setTimeout(function() { 
// //     console.log("second");
// // }, 1);
// // will execute faster checking the process of i/o in the queue
// // run this shit after printing first and third
// setImmediate(function() {
//     console.log("second");
// });
// console.log("third");

// const greetingModule = require("./greetings");
// greetingModule.english();
// greetingModule.spanish();

// const testModule = require("./greetings");
// testModule.testGreet.helloModule();
// testModule.anotherGreet();

// testModule.greetr.greet();

// // required modules are cached
// // module.exports are only ran once

// const greetings = require("./greetings");

// const greetness = new greetings.greetness();
// greetness.greeting = "Chappie!";
// console.log(greetness.greeting);

// const greetness2 = new greetings.greetness();
// greetness2.greeting = "New greeting";
// console.log(greetness2.greeting);

const express = require("express");
const app = express();
const routes = require("./routes");

// process.env.PORT = 
// process.env.IP = 

// routes and callbacks
app.get("/", routes.index);
app.get("/login", routes.login);
app.post("/login", routes.loginProcess);
app.get("/chat", routes.chat);

app.listen(process.env.PORT, process.env.IP);
console.log("Server Started");

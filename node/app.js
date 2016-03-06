const greet = require("./greet");
greet();

function Hacker(alias, favLang) {
    this.alias = alias;
    this.favLang = favLang;
}

Hacker.prototype.greet = require("./greet");

const hacker = new Hacker("Byrdann Fox", "JavaScript");
console.log(hacker);
console.log(hacker.greet());
console.log(hacker.__proto__);

const neoHacker = new Hacker("Neo", "C++");

// console.log(hacker.__proto__ === neoHacker.__proto__)

const primitiveValue = "Node.js v4.3.2 LTS"; // primitives are passed by value
// a different value is created in memory and placed into passByValue constant
// the value is copied into memory
const passByValue = primitiveValue;

// the value created and stored in referenceType is the same exact memory value as referneceType store
const referenceType = {
    "test": "value"
};
const passByReference = referenceType;

console.log(passByValue === primitiveValue);
console.log(passByReference === referenceType);

function change(b) {
    // b is now a new value in memory; a copy
    b = 2;
}
// this is referring to another space in memory
var a = 1;
// keep the execution context in mind
a = 2;
change(a);
console.log(a);

// pass by reference
function changeObj(d) {
    d.prop1 = function() {};
    d.prop2 = {};
}
var c = {};
c.prop1 = {};
changeObj(c);
console.log(c.prop1);
console.log(c.prop2);

// useful for scope considerations
// scope 1
var firstName = "Ryan";
(function(lastName) {
    // scope 2
    console.log(lastName);
    var firstName = "Byrdann";
    console.log(firstName);
}("Fox"));
console.log(firstName);
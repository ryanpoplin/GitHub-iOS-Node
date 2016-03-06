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

console.log(hacker.__proto__ === neoHacker.__proto__)


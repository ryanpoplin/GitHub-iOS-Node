"use strict";

function Greetness() {
    this.greeting = "Hello yo";
    this.greet = function() {
        console.log(this.greeting);
    };
}

module.exports = Greetness;
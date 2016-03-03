"use strict"

var Math = require("./math.js")
var math = new Math

// to use this in the browser: browserify math.js -o bundle.js
// <script src="bundle.js"></script>
console.log(math.add(1, 3))
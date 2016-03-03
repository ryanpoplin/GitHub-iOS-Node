"use strict"

// a readable stream pushing out a set of numbers

var stream = require("stream")
var Readable = stream.Readable
var util = require("util")

var Reader = function () {
	// get the scope of Readable?
	Readable.call(this)
	this.counter = 0
}

util.inherits(Reader, Readable)

Reader.prototype._read = function () {
	if (++this.counter > 10) {
		// this.push() refer to an array...
		return this.push(null)
	}
	this.push(this.counter.toString())
}

// When a #data event occurs, display the chunk
//
var reader = new Reader()

reader.setEncoding("utf8")

reader.on("data", function (chunk) {
	console.log(chunk)
})

reader.on("end", function () {
	console.log("--Finished--")
})  
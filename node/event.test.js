"use strict"

var EventEmitter = require("events").EventEmitter
var util = require("util")

var Counter = function (init) {
	this.increment = function () {
		init++
		this.emit("incremented", init)
	}
}

util.inherits(Counter, EventEmitter)

var counter = new Counter(10) 

var callback = function (count) {
	console.log(count)
}

counter.addListener("incremented", callback)

counter.increment()
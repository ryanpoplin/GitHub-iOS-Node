"use strict"

var fs = require("fs")

fs.readFile("event.test.js", {
	encoding: "utf8"
}, function (err, fileContents) {
	if (err) {
		console.log(err)
		return
	}
	console.log("Then the contents are available")
	console.log(fileContents)
})

console.log("This happens first")
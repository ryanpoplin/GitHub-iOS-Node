"use strict"

var fs = require("fs")

var fileNames = ["a.txt", "b.txt", "c.txt"]
fileNames.forEach(function (filename) {
	fs.readFile(filename, {
		encoding: "utf8"
	}, function (err, content) {
		if (err) { 
			return 
		}
		console.log(content)
	})
})
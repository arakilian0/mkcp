#!/usr/bin/env node

const path = require('path'),
			resolve = path.resolve,
			join = path.join,
			mkcp = require(resolve('index.js')),
			print = console.log,
			_args = process.argv;

let i,
		src,
		dest,
		handle;

handle = (() => {
	src = _args[2];
	dest = _args[3];
})();

mkcp(src, dest);

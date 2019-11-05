#!/usr/bin/env node

const path = require('path'),
			fs = require('fs'),
			resolve = path.resolve,
			join = path.join,
			mkdirp = require('mkdirp'),
			ncp = require('ncp'),
			print = console.log,
			_args = process.argv,
			prefix = 'mkcpError';

let i,
		src,
		dest,
		handle,
		newDest;

handle = (() => {
	src = _args[2]; dest = _args[3];
	if(!src || !dest) { return print(`${prefix}: function needs a source and destination path`) }
	else {
		if(!fs.existsSync(resolve(src))) { return print(`${prefix}: the provided source path does not exist`) }
		else {
			if(fs.lstatSync(src).isDirectory()) {
				mkdirp(dest, err => {
					if(err) { return print(err) }
					ncp(src,dest, err => {
						if(err) { return print(err) };
					});
				});
			}
			else {
				mkdirp(dest, err => {
					if(err) { return print(err) };
					newDest = join(dest,src.split('/')[src.split('/').length-1]);
					fs.copyFile(resolve(src), resolve(newDest), err => {
						if(err) { return print(err) };
					});
				});
			};
		};
	};
})();

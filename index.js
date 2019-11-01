const print = console.log,
			mkdirp = require('mkdirp'),
			ncp = require('ncp'),
			fs = require('fs'),
			path = require('path'),
			resolve = path.resolve,
			join = path.join,
			prefix = 'mkcpError';

let newDest;

module.exports = function(src,dest) {
	if(!src || !dest) { return print(`${prefix}: function needs a source path and destination path`) }
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
};

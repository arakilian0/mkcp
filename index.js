const print = console.log,
			mkdirp = require('mkdirp'),
			ncp = require('ncp'),
			fs = require('fs'),
			path = require('path'),
			resolve = path.resolve,
			join = path.join,
			prefix = 'mkcpError';

let isMac = process.platform === "darwin",
		isWin = process.platform === "win32";

module.exports = function(src,dest) {
	if(!src || !dest) { return print(`${prefix}: method needs a source and a destination`) }
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
					if(err) { return print(err) }
					if(isMac) {
						fs.copyFile(resolve(src), resolve(join(dest,src.split('/')[src.split('/').length-1])), err => {
							if(err) { return print() };
						});
					}
					if(isWin) {
						print('windows feature coming soon...');
					}
				});
			};
		};
	};
};

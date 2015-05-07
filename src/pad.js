(function(root, factory) {
	if (typeof define === 'function' && define.amd)
		define([], factory);
	else
		root.pad = factory();
}(this, function() {
	'use strict';

	return function pad(string, length, pad) {
		var s = String(string);
		var l = Math.max(0, Math.abs(length) - s.length);
		var p = new Array(++l).join(pad != null ? pad : ' ');
		return length < 0 ? s + p : p + s;
	};
}));

(function(root, factory) {
	if (typeof define === 'function' && define.amd)
		define([], factory);
	else
		root.currying = factory();
}(this, function() {
	'use strict';

	return function currying() {
		var slice = Array.prototype.slice;
		var f = arguments[0];
		var args = slice.call(arguments, 1);
		return function() {
			return f.apply(this, args.concat(slice.call(arguments)));
		};
	};
}));

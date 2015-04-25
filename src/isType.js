(function(root, factory) {
	if (typeof define === 'function' && define.amd)
		define([], factory);
	else
		root.isType = factory();
}(this, function() {
	'use strict';

	var toString = Object.prototype.toString;
	var cache = {};
	var special = {
		'nan': function(val) {
			return val !== val;
		},
		'plainobject': function(val) {
			return isType('object')(val) && val.constructor === Object;
		}
	};

	function isType(type) {
		if (typeof type !== 'string')
			throw new TypeError('Type must be a string.');
		type = type.toLowerCase();
		if (special[type]) return special[type];
		return cache[type] = cache[type] || function isType(val) {
			return toString.call(val).toLowerCase() === '[object ' + type + ']';
		};
	}

	return isType;
}));

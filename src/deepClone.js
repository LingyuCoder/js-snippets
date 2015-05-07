(function(root, factory) {
	if (typeof define === 'function' && define.amd)
		define(['isType', 'each'], factory);
	else
		root.deepClone = factory(isType, each);
}(this, function(isType, each) {
	'use strict';

	var isArray = isType('array');
	var isObject = isType('object');

	return function deepClone(obj) {
		var rst = isArray(obj) ? [] : {};
		each(obj, function(val, key) {
			rst[key] = (isObject(val) || isArray(val)) ? deepClone(val) : val;
		});
		return rst;
	};
}));

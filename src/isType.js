(function(root, factory) {
    if (typeof define === 'function' && define.amd)
        define([], factory);
    else
        root.isType = factory();
}(this, function() {
    'use strict';

    var cache = {};
    var toString = Object.prototype.toString;

    return function(type) {
        if (typeof type !== 'string')
            throw TypeError('Type must be a string.');
        type = type.toLowerCase();
        return cache[type] = cache[type] || function isType(val) {
            return toString.call(val).toLowerCase() === '[object ' + type + ']';
        };
    };
}));
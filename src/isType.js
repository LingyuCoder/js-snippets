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
        return cache[type] = cache[type] || function isType(val) {
            return toString.call(val).toLowerCase() === '[object ' + type + ']';
        };
    };
}));
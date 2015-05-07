(function(root, factory) {
    if (typeof define === 'function' && define.amd) define([], factory);
}(this, function() {
    'use strict';
    Object.create = function(parent) {
        function F() {}
        F.prototype = parent;
        return new F();
    };
}));
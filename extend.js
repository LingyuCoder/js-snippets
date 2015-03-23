(function(root, factory) {
    if (typeof define === 'function' && define.amd)
        define(['each'], factory);
    else
        root.extend = factory(each);
}(this, function(each) {
    'use strict';

    return function extend() {
        var args = arguments;
        var dest = args[0];
        var i, src, property;
        for (i = 1; src = args[i]; i++)
            each(src, function(val, key) {
                dest[key] = val;
            });
        return dest;
    };
}));
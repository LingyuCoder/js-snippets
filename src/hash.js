(function(root, factory) {
    if (typeof define === 'function' && define.amd)
        define([], factory);
    else
        root.hash = factory();
}(this, function() {
    'use strict';
    
    return function hash(length) {
        var ret = '';
        for (var rand, l = length || 1; l--;)
            ret += (rand = Math.random() * 62 | 0) < 10 ? rand : String.fromCharCode(rand + (rand < 36 ? 87 : 29));
        return ret;
    };
}));
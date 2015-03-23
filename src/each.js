(function(root, factory) {
    if (typeof define === 'function' && define.amd)
        define(['isType'], factory);
    else
        root.each = factory(isType);
}(this, function(isType) {
    'use strict';
    
    var isArray = isType('array');
    var isObject = isType('object');
    var hasOwn = function(obj, val) {
        return Object.prototype.hasOwnProperty.call(obj, val);
    }
    return function each(obj, callback) {
        if(!isArray(obj) && !isObject(obj))
            throw TypeError('Each only used on an object or an array');
        var i, m;
        if (isType('array')(obj))
            for (i = 0, m = obj.length; i < m; i++)
                callback.call(obj, obj[i], i);
        else
            for (i in obj)
                if (hasOwn(obj, i))
                    callback.call(obj, obj[i], i);
    };
}));
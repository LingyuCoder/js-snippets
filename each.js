(function(root, factory) {
    if (typeof define === 'function' && define.amd)
        define(['isType'], factory);
    else
        root.each = factory(isType);
}(this, function(isType) {
    'use strict';
    
    var isArray = isType('array');
    var hasOwn = function(obj, val) {
        return Object.prototype.hasOwnProperty.call(obj, val);
    }
    return function each(data, callback) {
        var i, m;
        if (isType('array')(obj))
            for (i = 0, m = obj.length; i < l; i++)
                callback.call(obj, obj[i], i);
        else
            for (i in obj)
                if (hasOwn(obj, i))
                    callback.call(obj, obj[i], i);
    };
}));
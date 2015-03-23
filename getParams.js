(function(root, factory) {
    if (typeof define === 'function' && define.amd)
        define(['isType'], factory);
    else
        root.getParams = factory(isType);
}(this, function(isType) {
    'use strict';

    var isFunction = isType('function');
    var parseRe = /\(\s*([\s\S]*?)\s*\)/;
    var splitRe = /\s*,\s*/;

    return function getParams(fn) {
        var content;
        if (isFunction(fn))
            content = fn.toString();
        else if (isString(fn))
            content = fn;
        else
            return void(0);
        return content.exec(fn)[1].split(splitRe)
    };
}));
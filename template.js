(function(root, factory) {
    if (typeof define === 'function' && define.amd)
        define(['each'], factory);
    else
        root.template = factory(each);
}(this, function(each) {
    'use strict';

    return function template(str, data) {
        each(data, function(val, key) {
            str = str.replace(new RegExp('\\${' + key + '}', 'g'), val);
        });
        return str;
    };
}));
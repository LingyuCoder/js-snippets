(function(root, factory) {
    if (typeof define === 'function' && define.amd)
        define(['isType', 'each'], factory);
    else
        root.serialize = factory(isType, each);
}(this, function(isType, each) {
    'use strict';

    var isFunction = isType('function');
    var isNull = isType('null');
    var isUndefined = isType('undefined');
    var isArray = isType('array');
    var isPlainObject = isType('plainobject');

    function add(rst, val, key) {
        if (isFunction(val))
            val = val();
        else if (isNull(val) || isUndefined(val))
            val = '';

        val = isFunction(val) ? val() : val;
        return rst[rst.length] = encodeURIComponent(key) + "=" + encodeURIComponent(val);
    }

    function build(rst, data, prefix) {
        if (isArray(data))
            each(data, function(val, index) {
                build(rst, val, prefix + '[' + (typeof val === 'object' ? index : '') + ']');
            });
        else if (isPlainObject(data))
            each(data, function(val, key) {
                build(rst, val, prefix + '[' + key + ']');
            });
        else
            add(rst, data, prefix);
    }

    return function serialize(data) {
        var rst = [];
        if (isPlainObject(data)) {
            each(data, function(val, key) {
                build(rst, val, key);
            });
        }
        return rst.join('&').replace(/%20/g, '+');
    };
}));
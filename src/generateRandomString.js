(function(root, factory) {
    if (typeof define === 'function' && define.amd) define([], factory);
    else root.generateRandomString = factory();
}(this, function() {
    'use strict';

    function generateRandomAlphaNum(len) {
    		len = len || 0;
        var rdmString = "";
        for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
        return rdmString.substr(0, len);
    }

    return generateRandomAlphaNum;
}));
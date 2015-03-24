(function(root, factory) {
    if (typeof define === 'function' && define.amd)
        define(['each'], factory);
    else
        root.parseURL = factory(each);
}(this, function(each) {
    'use strict';

    var pathRe = /^([^\/])/;
    var queryRe = /^\?/;

    function parseQuery(str) {
        var rst = {};
        str = str.replace(queryRe, '').split('&');
        each(str, function(val) {
            if (!val) return;
            val = val.split('=');
            rst[val[0]] = val[1];
        });
        return rst;
    }

    return function parseURL(url) {
        var a = document.createElement('a');
        a.href = url;
        return {
            url: url,
            scheme: a.protocol.replace(':', ''),
            host: a.host,
            hostname: a.hostname,
            port: parseInt(a.port) || 80,
            path: a.pathname.replace(pathRe, '/$1'),
            hash: a.hash.replace('#', ''),
            query: parseQuery(a.search)
        };
    };
}));
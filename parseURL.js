(function(root, factory) {
    if (typeof define === 'function' && define.amd)
        define(['each'], factory);
    else
        root.parseURL = factory(each);
}(this, function(each) {
    'use strict';

    return function parseURL(url) {
        var a = document.createElement('a');
        a.href = url;
        return {
            source: url,
            scheme: a.protocol.replace(':', ''),
            host: a.host,
            port: a.port || 80,
            path: a.pathname.replace(/^([^\/])/, '/$1'),
            hash: a.hash.replace('#', ''),
            query: ! function() {
                var rst = {};
                var queryStr = a.search.replace(/^\?/, '').split('&');
                each(queryStr, function(val) {
                    if (!val) return;
                    val = val.split('=');
                    rst[val[0]] = rst[val[1]];
                });
            }()
        };
    };
}));
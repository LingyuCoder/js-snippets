(function(root, factory) {
	if (typeof define === 'function' && define.amd)
		define([], factory);
	else
		root.CookieManager = factory();
}(this, function() {
	'use strict';

	return {
		get: function(name) {
			var dc = document.cookie;
			var prefix = name + "=";
			var begin = dc.indexOf("; " + prefix);
			if (begin == -1) {
				begin = dc.indexOf(prefix);
				if (begin !== 0) return null;
			} else {
				begin += 2;
			}
			var end = document.cookie.indexOf(";", begin);
			if (end == -1) {
				end = dc.length;
			}
			return unescape(dc.substring(begin + prefix.length, end));
		},
		set: function(name, value, expires, path, domain, secure) {
			document.cookie = name + "=" + escape(value) +
				((expires) ? "; expires=" + expires.toGMTString() : "") +
				((path) ? "; path=" + path : "") +
				((domain) ? "; domain=" + domain : "") +
				((secure) ? "; secure" : "");
			return this;
		},
		delete: function(name, path, domain) {
			if (this.get(name)) {
				document.cookie = name + "=" +
					((path) ? "; path=" + path : "") +
					((domain) ? "; domain=" + domain : "") +
					"; expires=Thu, 01-Jan-70 00:00:01 GMT";
			}
		}
	};
}));

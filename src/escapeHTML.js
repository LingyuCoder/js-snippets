(function(root, factory) {
	if (typeof define === 'function' && define.amd)
		define([], factory);
	else
		root.escapeHTML = factory();
}(this, function() {
	'use strict';

	var escapeMap = {
		"<": "&#60;",
		">": "&#62;",
		'"': "&#34;",
		"'": "&#39;",
		"&": "&#38;"
	};

	function escapeFn(s) {
		return escapeMap[s];
	}

	function escapeHTML(content) {
		return content
			.replace(/&(?![\w#]+;)|[<>"']/g, escapeFn);
	}

	return escapeHTML;
}));

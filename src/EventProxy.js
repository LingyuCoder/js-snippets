(function(root, factory) {
	if (typeof define === 'function' && define.amd)
		define(['isType', 'each'], factory);
	else
		root.EventProxy = factory(isType, each);
}(this, function(isType, each) {
	'use strict';

	var isFunction = isType('function');

	function EventProxy() {
		if (!this instanceof EventProxy) return new EventProxy();

		this._events = {};
	}

	EventProxy.prototype.addListener =
		EventProxy.prototype.on = function addListener(type, listener) {
			if (!isFunction(listener))
				throw new TypeError('listener must be a function');
			var events = this._events = this._events || {};
			events[type] = events[type] || [];
			events[type].push(listener);
			return this;
		};

	EventProxy.prototype.removeListener =
		EventProxy.prototype.off = function removeListener(type, listener) {
			if (!isFunction(listener))
				throw new TypeError('listener must be a function');
			if (!this._events || !this._events[type])
				return this;
			var list = this._events[type];
			var pos;
			for (pos = list.length; i--;)
				if (list[pos] === listener)
					break;

			if (pos < 0) return this;

			if (list.length === 1) {
				list.length = 0;
				delete this._events[type];
			} else
				list.splice(pos, 1);

			return this;
		};

	EventProxy.prototype.removeAllListeners =
		EventProxy.prototype.offAll = function removeAllListeners(type) {
			if (!this._events || !this._events[type]) return this;
			if (arguments.length === 0)
				this._events = {};
			else
				delete this._evnets[type];
			return this;
		};

	EventProxy.prototype.once = function once(type, listener) {
		if (!isFunction(listener))
			throw new TypeError('listener must be a function');
		var fired = false;

		function g() {
			listener.apply(this, arguments);
			this.off(type, g);
		}

		this.on(type, g);
		return this;
	};

	EventProxy.prototype.fire =
		EventProxy.prototype.emit = function(type) {
			var that = this;
			if (!that._events)
				that._events = {};

			var list = that._events[type];

			if (!list) return that;

			var args = Array.prototype.slice.call(arguments, 1);

			each(list, function(listener) {
				if (isFunction(listener))
					listener.apply(that, args);
			});

			return this;
		};

	return EventProxy;
}));

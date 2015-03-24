(function(root, factory) {
    if (typeof define === 'function' && define.amd)
        define(['isType'], factory);
    else
        root.inherits = factory(isType);
}(this, function(isType) {
    'use strict';

    if (isType('function')(Object.create))
        return function inherits(ctor, superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
                constructor: {
                    value: ctor,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
        };
    else
        return function inherits(ctor, superCtor) {
            ctor.super_ = superCtor
            var TempCtor = function() {}
            TempCtor.prototype = superCtor.prototype
            ctor.prototype = new TempCtor()
            ctor.prototype.constructor = ctor
        };
}));
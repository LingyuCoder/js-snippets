require.config({
    baseUrl: 'src',
    paths: {
        'mocha': '../lib/mocha/mocha',
        'chai': '../lib/chai/chai'
    },
    shim: {
        'mocha': {
            init: function() {
                this.mocha.setup('bdd');
                return this.mocha;
            }
        }
    },
});

define(function(require) {
    var chai = require('chai');
    var mocha = require('mocha');

    require([
        '../test/each',
    ], function(require) {
        mocha.run();
    });

});
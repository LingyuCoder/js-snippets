define(function(require) {
    var should = require('chai').should();

    var deepClone = require('deepClone');

    describe('deepClone', function() {
        describe('Clone object.', function() {
            it('Clone empty object.', function() {
                var obj = {};
                deepClone(obj).should.to.deep.equal(obj);
            });
            it('Clone object with string, number, boolean, null, undefined', function() {
                var obj = {
                    str: 'string',
                    num: 123,
                    bool: true,
                    nu: null,
                    und: undefined,
                    nan: NaN
                };
                deepClone(obj).should.to.deep.equal(obj);
            });
            it('Clone object with function, object, array', function() {
                var obj = {
                    fn: function() {},
                    obj: {
                        some: 'some',
                        array: [2, 3, 4]
                    },
                    array: [1, '2', false]
                };
                deepClone(obj).should.to.deep.equal(obj);
            });
        });
        describe('Clone array.', function() {
            it('Clone empty array.', function() {
                var array = [];
                deepClone(array).should.to.deep.equal(array);
            });
            it('Clone object with string, number, boolean, null, undefined', function() {
                var array = ['123', 123, true, null, undefined];
                deepClone(array).should.to.deep.equal(array);
            });
            it('Clone object with function, object, array', function() {
                var array = {
                    fn: function() {},
                    array: {
                        some: 'some',
                        obj: {
                            b: 'b'
                        }
                    },
                    array: [1, '2', false]
                };
                deepClone(array).should.to.deep.equal(array);
            });
        });
    });
});
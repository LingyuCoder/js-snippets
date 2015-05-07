define(function(require) {
    var should = require('chai').should();

    describe('each', function() {
        var each = require('each');
        it('不能遍历字符串', function() {
            ~ function() {
                each('a', function() {});
            }.should.to.throw('Each only used on an object or an array')
        });
        it('不能遍历数字', function() {
            ~ function() {
                each(123, function() {});
            }.should.to.throw('Each only used on an object or an array')
        });
        it('不能遍历函数', function() {
            ~ function() {
                each(function() {}, function() {});
            }.should.to.throw('Each only used on an object or an array')
        });
        it('不能遍历Null或Undefined', function() {
            ~ function() {
                each(null, function() {});
            }.should.to.throw('Each only used on an object or an array')
            ~ function() {
                each(undefined, function() {});
            }.should.to.throw('Each only used on an object or an array')
        });
        it('能够正确遍历数组', function() {
            var array = [1, 'string', {
                test: 'test'
            }, undefined, null, function fn() {}];
            var rst = [];
            each(array, function(val, key) {
                rst[key] = val;
            });
            rst.should.to.deep.equal(array);
        });
        it('能够正确遍历对象', function() {
            var obj = {
                string: 'someString',
                number: 123,
                fn: function testFn() {},
                array: [1, 2, 3],
                obj: {
                    a: 'a'
                }
            };
            var rst = {};
            each(obj, function(val, key) {
                rst[key] = val;
            });
            rst.should.to.deep.equal(obj);
        });
    });
});
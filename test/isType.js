define(function(require) {
    var should = require('chai').should();

    var isType = require('isType');

    var isString = isType('string');
    var isNumber = isType('number');
    var isBoolean = isType('boolean');
    var isFunction = isType('function');
    var isNull = isType('null');
    var isUndefined = isType('undefined');
    var isObject = isType('object');
    var isArray = isType('array');
    var isDate = isType('date');
    

    describe('isType', function() {
        it('能够正确识别字符串', function() {
            isString('asdf').should.to.equal(true);
            isString(1234).should.to.equal(false);
            isString(NaN).should.to.equal(false);
            isString(false).should.to.equal(false);
            isString(null).should.to.equal(false);
            isString(undefined).should.to.equal(false);
            isString(function() {}).should.to.equal(false);
            isString({}).should.to.equal(false);
            isString([]).should.to.equal(false);
            isString(new Date()).should.to.equal(false);
        });
        it('能够正确识别数字', function() {
            isNumber('asdf').should.to.equal(false);
            isNumber(1234).should.to.equal(true);
            isNumber(NaN).should.to.equal(true);
            isNumber(false).should.to.equal(false);
            isNumber(null).should.to.equal(false);
            isNumber(undefined).should.to.equal(false);
            isNumber(function() {}).should.to.equal(false);
            isNumber({}).should.to.equal(false);
            isNumber([]).should.to.equal(false);
            isNumber(new Date()).should.to.equal(false);
        });
        it('能够正确识别布尔', function() {
            isBoolean('asdf').should.to.equal(false);
            isBoolean(1234).should.to.equal(false);
            isBoolean(NaN).should.to.equal(false);
            isBoolean(false).should.to.equal(true);
            isBoolean(null).should.to.equal(false);
            isBoolean(undefined).should.to.equal(false);
            isBoolean(function() {}).should.to.equal(false);
            isBoolean({}).should.to.equal(false);
            isBoolean([]).should.to.equal(false);
            isBoolean(new Date()).should.to.equal(false);
        });
        it('能够正确识别函数', function() {
            isFunction('asdf').should.to.equal(false);
            isFunction(1234).should.to.equal(false);
            isFunction(NaN).should.to.equal(false);
            isFunction(false).should.to.equal(false);
            isFunction(null).should.to.equal(false);
            isFunction(undefined).should.to.equal(false);
            isFunction(function() {}).should.to.equal(true);
            isFunction({}).should.to.equal(false);
            isFunction([]).should.to.equal(false);
            isFunction(new Date()).should.to.equal(false);
        });
        it('能够正确识别对象', function() {
            isObject('asdf').should.to.equal(false);
            isObject(1234).should.to.equal(false);
            isObject(NaN).should.to.equal(false);
            isObject(false).should.to.equal(false);
            isObject(null).should.to.equal(false);
            isObject(undefined).should.to.equal(false);
            isObject(function() {}).should.to.equal(false);
            isObject({}).should.to.equal(true);
            isObject([]).should.to.equal(false);
            isObject(new Date()).should.to.equal(false);
        });
        it('能够正确识别数组', function() {
            isArray('asdf').should.to.equal(false);
            isArray(1234).should.to.equal(false);
            isArray(NaN).should.to.equal(false);
            isArray(false).should.to.equal(false);
            isArray(null).should.to.equal(false);
            isArray(undefined).should.to.equal(false);
            isArray(function() {}).should.to.equal(false);
            isArray({}).should.to.equal(false);
            isArray([]).should.to.equal(true);
            isArray(new Date()).should.to.equal(false);
        });
        it('能够正确识别null', function() {
            isNull('asdf').should.to.equal(false);
            isNull(1234).should.to.equal(false);
            isNull(NaN).should.to.equal(false);
            isNull(false).should.to.equal(false);
            isNull(null).should.to.equal(true);
            isNull(undefined).should.to.equal(false);
            isNull(function() {}).should.to.equal(false);
            isNull({}).should.to.equal(false);
            isNull([]).should.to.equal(false);
            isNull(new Date()).should.to.equal(false);
        });
        it('能够正确识别undefined', function() {
            isUndefined('asdf').should.to.equal(false);
            isUndefined(1234).should.to.equal(false);
            isUndefined(NaN).should.to.equal(false);
            isUndefined(false).should.to.equal(false);
            isUndefined(null).should.to.equal(false);
            isUndefined(undefined).should.to.equal(true);
            isUndefined(function() {}).should.to.equal(false);
            isUndefined({}).should.to.equal(false);
            isUndefined([]).should.to.equal(false);
            isUndefined(new Date()).should.to.equal(false);
        });
        it('能够正确识别Date', function() {
            isDate('asdf').should.to.equal(false);
            isDate(1234).should.to.equal(false);
            isDate(NaN).should.to.equal(false);
            isDate(false).should.to.equal(false);
            isDate(null).should.to.equal(false);
            isDate(undefined).should.to.equal(false);
            isDate(function() {}).should.to.equal(false);
            isDate({}).should.to.equal(false);
            isDate([]).should.to.equal(false);
            isDate(new Date()).should.to.equal(true);
        });
    });
});
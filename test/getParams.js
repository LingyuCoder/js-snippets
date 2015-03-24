define(function(require) {
    var should = require('chai').should();

    var getParams = require('getParams');

    describe('getParams', function() {
        it('能够正确提取函数的参数', function() {
            getParams(function(fisrt, middle, last) {
                var content = "some code here";
            }).should.to.deep.equal(['fisrt', 'middle', 'last']);
        });
        it('能够正确提取字符串形式函数的参数', function() {
            getParams('function(fisrt, middle, last) {var content = "some code here"; }').should.to.deep.equal(['fisrt', 'middle', 'last']);
        });
    });
});
define(function(require) {
    var should = require('chai').should();

    var serialize = require('serialize');

    describe('serialize', function() {
        describe('Serialize Object correctly. ', function() {
            it("Serialize with base type", function() {
                serialize({
                    name: '天镶',
                    birth: '1991-2-22',
                    gay: false
                }).should.to.equal('name=%E5%A4%A9%E9%95%B6&birth=1991-2-22&gay=false');
            });
            it('Serialize with function', function() {
                serialize({
                    name: '天镶',
                    birth: '1991-2-22',
                    gay: false,
                    sex: function() {
                        return 'male'
                    }
                }).should.to.equal('name=%E5%A4%A9%E9%95%B6&birth=1991-2-22&gay=false&sex=male');
            });
            it('Serialize with array', function() {
                serialize({
                    name: '天镶',
                    birth: '1991-2-22',
                    sex: function() {
                        return 'male'
                    },
                    array: ['a', 123, true, function() {
                        return 'hehe'
                    }, {
                        first: 1,
                        second: 2
                    }]
                }).should.to.equal('name=%E5%A4%A9%E9%95%B6&birth=1991-2-22&sex=male&array%5B%5D=a&array%5B%5D=123&array%5B%5D=true&array%5B%5D=hehe&array%5B4%5D%5Bfirst%5D=1&array%5B4%5D%5Bsecond%5D=2');
            });

            it('Serialize with object', function() {
                serialize({
                    name: '天镶',
                    birth: '1991-2-22',
                    sex: function() {
                        return 'male'
                    },
                    array: ['a', 123, true, function() {
                        return 'hehe'
                    }, {
                        first: 1,
                        second: 2
                    }],
                    someObj: {
                        blabla: 'blabla',
                        array: [1, 2, 3, 4, 5]
                    }
                }).should.to.equal('name=%E5%A4%A9%E9%95%B6&birth=1991-2-22&sex=male&array%5B%5D=a&array%5B%5D=123&array%5B%5D=true&array%5B%5D=hehe&array%5B4%5D%5Bfirst%5D=1&array%5B4%5D%5Bsecond%5D=2&someObj%5Bblabla%5D=blabla&someObj%5Barray%5D%5B%5D=1&someObj%5Barray%5D%5B%5D=2&someObj%5Barray%5D%5B%5D=3&someObj%5Barray%5D%5B%5D=4&someObj%5Barray%5D%5B%5D=5');
            });
        });
    });
});
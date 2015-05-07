define(function(require) {
    var should = require('chai').should();

    var parseURL = require('parseURL');

    describe('parseURL', function() {
        describe('Parsing "http://www.qunar.com" correctly. ', function() {
            var url = 'http://www.qunar.com';
            var rst = parseURL(url);
            it('Scheme is "http"', function() {
                rst.scheme.should.to.equal('http');
            });
            it('Host is "www.qunar.com"', function() {
                rst.host.should.to.equal('www.qunar.com');
            });
            it('Hostname is "www.qunar.com"', function() {
                rst.hostname.should.to.equal('www.qunar.com');
            });
            it('Port is 80', function() {
                rst.port.should.to.equal(80);
            });
            it('Path is "/"', function() {
                rst.path.should.to.equal('/');
            });
            it('Hash is ""', function() {
                rst.hash.should.to.equal('');
            });
            it('Query is empty object', function() {
                rst.query.should.to.deep.equal({});
            });
        });

        describe('Parsing "http://www.qunar.com:8080" correctly. ', function() {
            var url = 'http://www.qunar.com:8080';
            var rst = parseURL(url);
            it('Scheme is "http"', function() {
                rst.scheme.should.to.equal('http');
            });
            it('Host is "www.qunar.com:8080"', function() {
                rst.host.should.to.equal('www.qunar.com:8080');
            });
            it('Hostname is "www.qunar.com"', function() {
                rst.hostname.should.to.equal('www.qunar.com');
            });
            it('Port is 8080', function() {
                rst.port.should.to.equal(8080);
            });
            it('Path is "/"', function() {
                rst.path.should.to.equal('/');
            });
            it('Hash is ""', function() {
                rst.hash.should.to.equal('');
            });
            it('Query is empty object', function() {
                rst.query.should.to.deep.equal({});
            });
        });

        describe('Parsing "http://www.qunar.com:8080#somehash" correctly. ', function() {
            var url = 'http://www.qunar.com:8080#somehash';
            var rst = parseURL(url);
            it('Scheme is "http"', function() {
                rst.scheme.should.to.equal('http');
            });
            it('Host is "www.qunar.com:8080"', function() {
                rst.host.should.to.equal('www.qunar.com:8080');
            });
            it('Hostname is "www.qunar.com"', function() {
                rst.hostname.should.to.equal('www.qunar.com');
            });
            it('Port is 8080', function() {
                rst.port.should.to.equal(8080);
            });
            it('Path is "/"', function() {
                rst.path.should.to.equal('/');
            });
            it('Hash is "somehash"', function() {
                rst.hash.should.to.equal('somehash');
            });
            it('Query is empty object', function() {
                rst.query.should.to.deep.equal({});
            });
        });

        describe('Parsing "http://www.qunar.com:8080/plane/queryPlane.html?startTime=xxxx&endTime=xxxxx#tags" correctly. ', function() {
            var url = 'http://www.qunar.com:8080/plane/queryPlane.html?startTime=xxxx&endTime=xxxxx#tags';
            var rst = parseURL(url);
            it('Scheme is "http"', function() {
                rst.scheme.should.to.equal('http');
            });
            it('Host is "www.qunar.com:8080"', function() {
                rst.host.should.to.equal('www.qunar.com:8080');
            });
            it('Hostname is "www.qunar.com"', function() {
                rst.hostname.should.to.equal('www.qunar.com');
            });
            it('Port is 8080', function() {
                rst.port.should.to.equal(8080);
            });
            it('Path is "/plane/queryPlane.html"', function() {
                rst.path.should.to.equal('/plane/queryPlane.html');
            });
            it('Hash is "tags"', function() {
                rst.hash.should.to.equal('tags');
            });
            it('Query is correct object', function() {
                rst.query.should.to.deep.equal({
                    startTime: 'xxxx',
                    endTime: 'xxxxx'
                });
            });
        });
    });
});
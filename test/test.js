var path = require('path');
var express = require('express');
var request = require('supertest');
var should = require('should');
var partials = require('..');

describe('partials()', function() {

  it('should create an endpoint that renders partials', function(done) {

    var app = express();
    app.locals.basedir = path.join(__dirname, 'partials');
    app.use('/render', partials(app.locals.basedir, 'jade'));

    request(app)
      .get('/render?template=test&text=hello')
      .end(function(err, res) {
        res.text.should.equal('<h1>hello</h1>');
        done();
      });

  });

  it('should not render partials outside of the partials directory', function(done) {

    var app = express();
    app.locals.basedir = path.join(__dirname, 'partials');
    app.use('/render', partials(app.locals.basedir, 'jade'));

    request(app)
      .get('/render?template=../inaccessible&text=hello')
      .end(function(err, res) {
        res.status.should.equal(404);
        done();
      });

  });

});
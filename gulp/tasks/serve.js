'use strict';

// Dependencies
var gulp = require('gulp');
var webserver = require('gulp-webserver');

// Utils
var paths = require(appRoot + '/paths.json');

module.exports = function () {
  gulp.src(paths.app)
    .pipe(webserver({
      host: '0.0.0.0',
      port: '8080',
      livereload: true
    }));
};

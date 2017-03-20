'use strict';

// Dependencies
var gulp = require('gulp');
var jshint = require('gulp-jshint');

// Utils
var paths = require(appRoot + '/paths.json');

module.exports = function () {
  return gulp.src([
      './gulpfile.js',
      './gulp/**/*.js',
      paths.app + paths.js + '/**/*js',
      '!' + paths.app + paths.js + '/bundle.js',
      '!' + paths.app + paths.browserify + '/bootstrap.js'
    ])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
};

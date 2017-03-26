'use strict';

// Dependencies
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');
var sourcemaps = require('gulp-sourcemaps');

// Utils
var paths = require(appRoot + '/paths.json');
var handleError = require('../error.js');

module.exports = function () {
  gulp.src(paths.app + paths.stylus + '/style.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({
      compress: build,
      'include css': true,
      use: nib()
    }))
    .on('error', handleError('Stylus'))
    .pipe(sourcemaps.write('../assets/maps'))
    .pipe(gulp.dest(paths.app + paths.css));
};

'use strict';

// Dependencies
var gulp = require('gulp');

// Utils
var gutil = require('gulp-util');
var paths = require(appRoot + '/paths.json');

module.exports = function () {
  gulp.watch(paths.app + paths.stylus + '/**/*.styl', ['stylus']);
  gulp.watch(paths.app + paths.browserify + '/**/*.js', ['jshint', 'browserify']);

  gutil.log(gutil.colors.bgGreen('Watching for changes...'));
};

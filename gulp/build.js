'use strict';

// Dependencies
var gulp = require('gulp');
var useref = require('gulp-useref');

// Utils
var gutil = require('gulp-util');
var paths = require(appRoot + '/paths.json');

module.exports = function () {
  gulp.src(paths.app + '/*.html')
    .pipe(useref())
    .pipe(gulp.dest(paths.dist));

  gulp.src(paths.app + paths.assets + '/**/*')
    .pipe(gulp.dest(paths.dist + paths.assets));

  gutil.log(gutil.colors.bgGreen('Build in '+ paths.dist +' folder...'));
};

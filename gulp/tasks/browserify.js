'use strict';

// Dependencies
var gulp = require('gulp');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

// Utils
var paths = require(appRoot + '/paths.json');
var handleError = require('../error.js');

module.exports = function () {
    var bundler = browserify([
      paths.app + paths.browserify + '/index.js',
      paths.app + paths.browserify + '/vsop.js',
      paths.app + paths.browserify + '/bootstrap.js'

    ], {
      debug: !build,
      cache: {}
    });

    if (watch) {
      bundler = watchify(bundler);
    }

    var rebundle = function() {
      return bundler.bundle()
        .on('error', handleError('Browserify'))
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(gulpif(build, uglify()))
        .pipe(sourcemaps.write('../assets/maps'))
        .pipe(gulp.dest(paths.app + paths.js));
    };

    bundler.on('update', rebundle);

    return rebundle();
};

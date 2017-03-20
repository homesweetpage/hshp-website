'use strict';

var argv = require('yargs').argv;

// Globals
global.appRoot = require('app-root-path');
global.build = argv._.length ? argv._[0] === 'build' : false;
global.watch = argv._.length ? argv._[0] === 'watch' : true;

var gulp = require('./gulp')([
  'browserify',
  'clean',
  'jshint',
  'serve',
  'stylus'
]);

var gulpWatch = require('./gulp/watch.js');
var gulpBuild = require('./gulp/build.js');

gulp.task('build', ['clean', 'stylus', 'browserify'], gulpBuild);
gulp.task('watch', ['stylus', 'jshint', 'browserify', 'serve'], gulpWatch);
gulp.task('default', ['watch']); // for development and livereload

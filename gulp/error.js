'use strict';

// Dependencies
var notify = require('gulp-notify');

// Utils
var gutil = require('gulp-util');

module.exports = function(task) {
  return function(err) {
    notify.onError({
      message: task + ' failed, check the logs..',
      sound: false
    })(err);

    gutil.log(gutil.colors.bgRed(task + ' error:'), gutil.colors.red(err));
  };
};

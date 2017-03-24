'use strict';

var $ = require('jquery');

module.exports = function (cb) {
  var $loader = $('#loader-wrapper');
  $loader.fadeOut('slow',function () {
    if ($.isFunction(cb)) {
      cb();
    }
  });
};

'use strict';

var $ = require('jquery');

module.exports = function () {
  var $boxImg = $('.idea, .us, .result');
  var aspectRatio = $boxImg.width() * 1.2;
  $boxImg.height(aspectRatio);
};

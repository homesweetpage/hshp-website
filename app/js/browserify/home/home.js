'use strict';

var animate = require('./animate.js');
var resize = require('./resize.js');

module.exports = function () {
  animate();
  resize();
};

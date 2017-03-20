'use strict';

var $ = require('jquery');
var utils = require('../utils.js');

module.exports = function () {
  var $inputs = $('.form-input > input, textarea');

  $inputs.focusin(function() {
    var $parent = $(this).parent();
    var $label = $parent.children('label');
    $parent.addClass('square-animate');
    $label.addClass('label-animate');
  });

  $inputs.focusout(function() {
    var $self = $(this);
    var $parent = $self.parent();
    var $label = $parent.children('label');
    $parent.removeClass('square-animate');
    if ($self.val() === '') {
      $label.removeClass('label-animate');
      $parent.removeClass('square-error');
    } else if ($self.is('#email')) {
      if (!utils.validateEmail($self.val())) {
        $parent.addClass('square-error');
      } else {
        $parent.removeClass('square-error');
      }
    }
    else{
      $parent.removeClass('square-error');
    }
  });
};

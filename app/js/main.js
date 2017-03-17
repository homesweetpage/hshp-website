'use strict';

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function homeHandle() {
  var $boxImg = $('.idea, .us, .result');
  var calc = $boxImg.width() * 1.2;
  $boxImg.height(calc);
}

function formHandle() {
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
      if (!validateEmail($self.val())) {
        $parent.addClass('square-error');
      } else {
        $parent.removeClass('square-error');
      }
    }
    else{
      $parent.removeClass('square-error');
    }
  });
}

function mainReady() {
  homeHandle();
  formHandle();
}

$(document).ready(mainReady());

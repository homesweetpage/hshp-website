'use strict';

var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

function animateResult() {
  var $result = $('.result');
  var $boxImg = $result.children('.box-img');
  var $img = $boxImg.children('img');
  $boxImg.removeClass('hidden').addClass('fadeIn');
  $img.each(function(index, el) {
    setTimeout(function() {
      $(el).removeClass('hidden').addClass('zoomIn');
    }, 150*index);
  });
}

function animateUs() {
  var $us = $('.us');
  var $boxImg = $us.children('.box-img');
  $boxImg.removeClass('hidden').addClass('fadeIn').one(animationEnd, function() {
    animateResult();
  });
}

function animateIdea() {
  var $idea = $('.idea');
  var $boxImg = $idea.children('.box-img');
  $boxImg.removeClass('hidden').addClass('fadeIn').one(animationEnd, function() {
    animateUs();
  });
}

function animateHome() {
  animateIdea(); // Start animate in serie
}

function animateReady() {
  animateHome();
}

$(document).ready(animateReady);

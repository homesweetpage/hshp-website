'use strict';

var $ = require('jquery');
var animationEnd = require('../utils.js').animationEnd();

function bounceButton($el) {
  setTimeout(function() {
    $el.addClass('bounce').one(animationEnd, function() {
      $(this).removeClass('bounce');
      bounceButton($(this));
    });
  }, 4000);
}

function animateButton() {
  var $btn = $('.btn-down');
  $btn.removeClass('hidden').addClass('slideInUp').one(animationEnd, function() {
    $(this).removeClass('slideInUp');
    bounceButton($(this));
  });
}

function animateResult() {
  var $result = $('.result');
  var $boxImg = $result.children('.box-img');
  var $img = $boxImg.children('img');
  var $boxText = $('.result-box-text');
  var totalImg = $img.length;
  $boxImg.removeClass('hidden').addClass('fadeIn');
  $img.each(function(index, el) {
    setTimeout(function() {
      $(el).removeClass('hidden').addClass('zoomIn').one(animationEnd, function() {
        if (index === totalImg - 1) {
          animateButton();
        }
      });
    }, 150*index);
  });
  $boxText.removeClass('hidden').addClass('zoomIn');
}

function animateUs() {
  var $us = $('.us');
  var $boxImg = $us.children('.box-img');
  var $boxText = $('.us-box-text');
  $boxImg.removeClass('hidden').addClass('fadeIn');
  $boxText.removeClass('hidden').addClass('zoomIn').one(animationEnd, function() {
    animateResult();
  });
}

function animateIdea() {
  var $idea = $('.idea');
  var $boxImg = $idea.children('.box-img');
  var $boxText = $('.idea-box-text');
  $boxImg.removeClass('hidden').addClass('fadeIn');
  $boxText.removeClass('hidden').addClass('zoomIn').one(animationEnd, function() {
    animateUs();
  });
}

module.exports = function () {
  setTimeout(function () {
    animateIdea(); // Start animate in serie
  }, 300);
};

'use strict';

var $ = require('jquery');

var home = require('./home/home.js');
var homeResize = require('./home/resize.js');
var contact = require('./contact/contact.js');

function resizeHandle() {
  var resizeTimeout;

  function resizeThrottler() {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        homeResize();
      }, 66);
    }
  }

  $(window).resize(resizeThrottler);
}

function documentReady() {
  resizeHandle();
  home();
  contact();
}

$(document).ready(documentReady());

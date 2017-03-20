'use strict';

var $ = require('jquery');
var Hammer = require('hammerjs');

const KEY_UP = 38;
const KEY_DOWN = 40;
const WIDTH_MOBILE = 768;
const STATE = {
	Mobile: 'mobile',
	Desktop: 'desktop'
};
var isHome = true;
var currentSection = 0;
var cantidadSecciones = 0;
var enAnimacion = false;
var currentHeight = 0;
var currentState;

function getWindowHeight() {
	return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
}

function getWindowWidth() {
	return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

function isMobile(w) {
	return (w < WIDTH_MOBILE);
}

function enabledEvents(width) {
  if(isHome === false){
    return false;
  }
  else if(isMobile(width)){
    return false;
  }
  else {
    return true;
  }
}

function initMainContainer(of, h, tr) {
	$('html').css({
		'overflow': of,
		'height': h
	});
	$('body').css({
		'overflow': of,
		'height': h
	});
	$('#VerticalScrollFullPage').css({
		'height': h,
		'position': 'relative',
		'transition': 'all 1s ease 0s',
		'transform':' translate(0px,'+tr+'px)'
	});
}

function initSecciones(h) {
	$('.section').each(function(i){
		$(this).css({
			'height': h
		});
		cantidadSecciones = i;
	});
}

function setSecciones() {
	$('.section').each(function(){
		$(this).css({
			'height':getWindowHeight()
		});
	});
	currentHeight = -getWindowHeight() * currentSection;
	$('#VerticalScrollFullPage').css({
		'transform':'translate(0px,'+currentHeight+'px)'
	});
}

function initSetupDesktop() {
	initMainContainer('hidden', '100%', 0);
	initSecciones(getWindowHeight());
	currentState = STATE.Desktop;
}

function initSetupMobile() {
	initMainContainer('visible', 'auto', 0);
	initSecciones('auto');
	currentState = STATE.Mobile;
}

function transitionScroll(value) {
	if (enAnimacion === false) {
		if (value >= 0) {
			if(currentSection > 0){
				currentSection--;
				currentHeight = currentHeight+getWindowHeight();
				enAnimacion = true;
			}
		} else {
			if(currentSection < cantidadSecciones){
				currentSection++;
				currentHeight = currentHeight-getWindowHeight();
				enAnimacion = true;
			}
		}
		$('#VerticalScrollFullPage').css({
			'transform':'translate(0px,'+currentHeight+'px)'
		}).one('transitionend', function(){
			enAnimacion = false;
		});
	}
}

function displaywheel(e){
	var evt = window.event || e;
	var delta = evt.detail ? evt.detail*(-120) : evt.wheelDelta;
	if (enabledEvents(getWindowWidth())) {
		transitionScroll(delta);
	}
}

function initVSOP() {
	currentSection = 0;
	currentHeight = 0;
	if (enabledEvents(getWindowWidth())) {
		initSetupDesktop();
	} else {
		initSetupMobile();
	}
}

$(document).ready(function() {

	initVSOP();

  // CUSTOM EVENT
  $('.btn-down').click(function(event) {
    event.preventDefault();
    transitionScroll(-1);
  });

	// KEYS
	$(document).keydown(function(event) {
		if (enabledEvents(getWindowWidth())) {
			switch(event.keyCode) {
				case KEY_UP:
					event.preventDefault();
					transitionScroll(1);
					break;
				case KEY_DOWN:
					event.preventDefault();
					transitionScroll(-1);
					break;
				default:
					break;
			}
		}
	});

	// WHEEL
	var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? 'DOMMouseScroll' : 'mousewheel';

	if (document.attachEvent) {
		document.attachEvent('on'+mousewheelevt, displaywheel);
	}
	else if (document.addEventListener) {
		document.addEventListener(mousewheelevt, displaywheel, false);
	}

	// TOUCH
	var vsop = document.getElementById('VerticalScrollFullPage');
	delete Hammer.defaults.cssProps.userSelect;
	var mc = new Hammer(vsop, { inputClass: Hammer.TouchInput, touchAction: 'auto' });
	mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
	mc.on('panup', function() {
		if (enabledEvents(getWindowWidth())) {
			transitionScroll(-1);
		}
	});
	mc.on('pandown', function() {
		if (enabledEvents(getWindowWidth())) {
			transitionScroll(1);
		}
	});

	$(window).resize(function() {
		if (enabledEvents(getWindowWidth())) {
			if (currentState !== STATE.Desktop) {
				initSetupDesktop();
			}
			setSecciones();
		} else {
			if (currentState !== STATE.Mobile) {
				initSetupMobile();
			}
		}
	});
});

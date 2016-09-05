/*
* Script for scaling backgrounds
*
* Version: 1.0
*
* Author: Danny Hoek
*
* Contact: postduif@zwaarcontrast.nl
*
*/
(function($, window, document, undefined) {
	"use strict";

	//Constructor
	var Example = function(elem, options) {
		this.element = $(elem);
		this.$element = $(elem);
		this.options = options;
	};

	//Prototype
	Example.prototype = {

		defaults: {

		},

		//Initialisation
		init: function() {
			//Get the options and merge with defaults
			this.config = $.extend({}, this.defaults, this.options, this.metadata);

			//Prepare
			this.getElements();
			this.getDimensions();

			//Bind
			this.bindResizeEvent();
			this.bindRequestKeyframes();
			this.bindKeyboard();
		},
		getElements:function(){
			//Get elements and content

		},
		getDimensions:function(){
			//Get parent dimensions

		},

		bindResizeEvent: function(){
			var _self=this, TO = false;
			//Debounced resize handling
			$(window).resize(function() {
				if (TO !== false){
					clearTimeout(TO);
				}
				TO = setTimeout(function(){
					//Do stuff

				}, 200);
			});
		},
		bindRequestKeyframes:function(){
			//Loop for Animation of the handler
			window.requestAnimFrame = (function(){
				return  window.requestAnimationFrame       ||
						window.webkitRequestAnimationFrame ||
						window.mozRequestAnimationFrame    ||
						window.oRequestAnimationFrame      ||
						window.msRequestAnimationFrame     ||
						function( callback ){
							window.setTimeout(callback, 1000 / 60);
						};
			})();

			var _self = this;
			(function animloop(){
				//Do stuff

				window.requestAnimFrame(animloop);
			})();
		},
		bindKeyboard: function() {
			var _self = this;

			$(document).keydown(function(ev) {
				//Check is constructed in a way that is element in viewport check is not done on anything other than arrow presses
				if (ev.keyCode == 37 || ev.keyCode == 39) {
					if (ev.keyCode == 37) {
						_self.prevSlide();
					} else if (ev.keyCode == 39) {
						_self.nextSlide();
					}
				}
			});
		}
	};

	$.fn.Example = function(options) {
		return this.each(function() {
			new Example(this, options).init();
		});
	};
})(jQuery, window, document);

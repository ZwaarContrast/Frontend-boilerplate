!function(e,n,t,i){"use strict";var o=function(n,t){this.element=e(n),this.$element=e(n),this.options=t};o.prototype={defaults:{},init:function(){this.config=e.extend({},this.defaults,this.options,this.metadata),this.getElements(),this.getDimensions(),this.bindResizeEvent(),this.bindRequestKeyframes(),this.bindKeyboard()},getElements:function(){},getDimensions:function(){},bindResizeEvent:function(){var t=!1;e(n).resize(function(){t!==!1&&clearTimeout(t),t=setTimeout(function(){},200)})},bindRequestKeyframes:function(){n.requestAnimFrame=function(){return n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||n.oRequestAnimationFrame||n.msRequestAnimationFrame||function(e){n.setTimeout(e,1e3/60)}}();!function e(){n.requestAnimFrame(e)}()},bindKeyboard:function(){var n=this;e(t).keydown(function(e){37!=e.keyCode&&39!=e.keyCode||(37==e.keyCode?n.prevSlide():39==e.keyCode&&n.nextSlide())})}},e.fn.Example=function(e){return this.each(function(){new o(this,e).init()})}}(jQuery,window,document),function(e){e(document).ready(function(){}),e(window).load(function(){e("body").Example()})}(jQuery);
//# sourceMappingURL=default.js.map

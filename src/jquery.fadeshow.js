/*
 * jquery.fadeshow
 * https://github.com/bleech/jquery.fadeshow
 *
 * Copyright (c) 2012 bleech
 * Licensed under the MIT, GPL licenses.
 */

;(function ( $, window, document, undefined ) {

    $.fn.fadeshow = function ( options ) {

      options = $.extend( {}, $.fn.fadeshow.options, options );

      // create a new fadeshow for each element
      return this.each(function () {
        var elem = $(this);
        elem.data('fadeshow', new Fadeshow(elem, options));
      });

    };

    // constructor
    var Fadeshow = function (elem, options) {

      var that = this;

      this.options       = options;
      this.slides        = elem.children();
      this.current_slide = this.slides.first();

      // prepare visibility & styles
      elem.css({
        height: this.current_slide.height(),
        position: 'relative',
        width: this.current_slide.width()
      });

      this.slides.css({
        position: 'absolute'
      }).not(':first').hide();

      // start / stop fadeshow on mouseenter / mouseleave
      this.slides.on('mouseenter', $.proxy(that.stop, that));
      this.slides.on('mouseleave', $.proxy(that.start, that));

      // start the show
      this.start();

    };

    // fade out current slide + set next slide + fade in next slide
    Fadeshow.prototype.next = function () {
      this.current_slide.fadeOut(this.options.speed);
      this.current_slide = this.current_slide.next().length !== 1 ? this.slides.first() : this.current_slide.next();
      this.current_slide.fadeIn(this.options.speed);
    };

    // start slideshow
    Fadeshow.prototype.start = function () {
      var that = this;
      this.interval = setInterval(function () {
        that.next();
      }, this.options.interval);
    };

    // stop slideshow
    Fadeshow.prototype.stop = function () {
      clearInterval(this.interval);
    };

    // global default options
    $.fn.fadeshow.options = {
      interval: 4000,
      speed: 600
    };

}( jQuery, window, document ));
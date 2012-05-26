/*
 * jquery.fadeshow
 * https://github.com/bleech/jquery.fadeshow
 *
 * Copyright (c) 2012 bleech
 * Licensed under the MIT, GPL licenses.
 */

;(function ( $, window, document, undefined ) {

    // the jquery exposed method
    $.fn.fadeshow = function ( options ) {

      options = $.extend( {}, $.fn.fadeshow.options, options );

      // create a new fadeshow for each element
      return this.each(function () {
        var elem = $(this);
        elem.data('fadeshow', new Fadeshow(elem, options));
      });

    };

    // global default options
    $.fn.fadeshow.options = {
      interval: 4000,
      speed: 600
    };

    // plugin constructor
    var Fadeshow = function (elem, options) {

      // options & elements
      this.options       = options;
      this.slides        = elem.children();
      this.current_slide = this.slides.first();

      // set basic container styles
      elem.css({
        height: this.current_slide.height(),
        width: this.current_slide.width(),
        position: elem.css('position') === 'static' ? 'relative' : elem.css('position')
      });

      // set slide styles & hide others than first
      this.slides.css('position', 'absolute').not(':first').hide();

      // pause fadeshow on hover
      this.slides.on('mouseenter', $.proxy(this.stop, this));
      this.slides.on('mouseleave', $.proxy(this.start, this));

      // start the show
      this.start();

    };

    // start slideshow
    Fadeshow.prototype.start = function () {
      this.interval = setInterval($.proxy(this.next, this), this.options.interval);
    };

    // stop slideshow
    Fadeshow.prototype.stop = function () {
      clearInterval(this.interval);
    };

    // fade out current slide + set next slide + fade in next slide
    Fadeshow.prototype.next = function () {
      this.current_slide.fadeOut(this.options.speed);
      this.current_slide = this.current_slide.next().length === 0 ? this.slides.first() : this.current_slide.next();
      this.current_slide.fadeIn(this.options.speed);
    };

}( jQuery, window, document ));
/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  module('jQuery#fadeshow', {
    setup: function() {
      // setup dom element accessors
      this.list   = $('#qunit-fixture').find('ul');
      this.slides = this.list.children();

      // set defaults
      $.fn.fadeshow.options = {
        interval: 50,
        speed: 50
      };

      // run the slideshow
      this.list.fadeshow();

      // get the slideshow object
      this.fadeshow = this.list.data('fadeshow');
    }
  });

  test('initialization on lists', 2, function () {
    ok(this.fadeshow, 'loads onto element');
    equal(this.fadeshow.slides.length, this.slides.length, 'loads with all slides');
  });

  test('showing / hiding elements on init', 2, function () {
    ok(this.slides.first().is(':visible'), 'shows first slide');
    ok(this.slides.not(':first').is(':hidden'), 'hides all other slides');
  });

  test('setting container height / width', 2, function () {
    equal(this.list.height(), this.slides.first().height(), 'sets container height to first slide height');
    equal(this.list.width(), this.slides.first().width(), 'sets container width to first slide width');
  });

  asyncTest('running the slideshow', 2, function () {
    var that = this;
    setTimeout(function () {
      ok(that.slides.first().is(':hidden'), 'hides first slide');
      ok(that.slides.eq(1).is(':visible'), 'shows second slide');
      start();
    }, 120);
  });

  asyncTest('starting over with first slide after reaching the last one', 2, function () {
    var that = this;
    setTimeout(function () {
      ok(that.slides.eq(that.slides.length - 1).is(':visible'), 'shows last slide');
      setTimeout(function () {
        ok(that.slides.first().is(':visible'), 'shows first slide');
        start();
      }, 100);
    }, 300);
  });

}(jQuery));

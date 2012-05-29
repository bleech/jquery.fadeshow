# jQuery Fadeshow

A damn simple fading slideshow. Takes an interval and an animation speed. Pauses on hover.

# [DEMO](http://bleech.github.com/jquery.fadeshow)

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/bleech/jquery.fadeshow/master/dist/jquery.fadeshow.min.js
[max]: https://raw.github.com/bleech/jquery.fadeshow/master/dist/jquery.fadeshow.js
	
### Markup
```html
<ul class="container">
	<li>Slide 1</li>
	<li>Slide 2</li>
	<li>Slide 3</li>
</ul>
```
	
### Initialization
```javascript
$('.container').fadeshow();
```
	
### Options
```javascript
// setting global default options
$.fn.fadeshow.options = {
  interval: 4000,
  speed: 600,
  onInit: function () {},
  onFade: function () {}
};

// setting custom instance options
$('.container').fadeshow({
  interval: 2000,
  speed: 1000,
  onInit: function () {},
  onFade: function () {}
});
```

## Roadmap
- making the plugin extendable globally and per instance (prototypal inheritance)

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!_

## License
Copyright (c) 2012 bleech  
Licensed under the MIT, GPL licenses.

/**
 * Module dependencies.
 */

var $ = require('jquery')
   , html = require('./template');


/**
 * Expose `top`.
 */

module.exports = top;

/**
 * Add back-to-top link.
 *
 * @api public
 */

function top() {
  var $el = $(html);

  $el.click(function () {
    $("html, body").animate({ scrollTop: 0 }, 120);
  });

  function onscroll() {
  	var top = $(document).scrollTop();
  	var height = $(window).height();
    (top > 0) ? $el.show() : $el.hide();

    //IE6 positioning
    if (!window.XMLHttpRequest) {
      $el.css("top", top + height - 166);
    }
  }

  $(window).on("scroll", onscroll);
  document.body.appendChild($el.get(0));
}
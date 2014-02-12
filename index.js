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
  var $doc = $(document);
  var $win = $(window);

  $el.click(function () {
    $("html, body").animate({ scrollTop: 0 }, 120);
  });

  function onscroll() {
  	var top = $doc.scrollTop();
  	var height = $win.height();
    (top > 0) ? $el.show() : $el.hide();

    //IE6 positioning
    if (!window.XMLHttpRequest) {
      $el.css("top", top + height - 166);
    }
  }

  $win.on("scroll", onscroll);
  $el.appendTo(document.body);
}
(function ($, window, document, undefined) {
  'use strict';

  var $window = $(window);
  var durGo = 1000;
  var durAnim = 200;
  // var bez = $.bez([0.29, 0, 0, 1]);
  var pow = Math.pow;

  $.easing['custom'] = function (x) {
    return x < 0.25 ? 5 * pow(x, 2) : 1 - 1.63 * pow(1 - x, 3);
  };

  var initMenu = function () {
    var $menu = $('#wrap-menu');
    var $paths = $('#buttons').find('path');
    var $logo = $('#logo');
    var $mark = $('#mark');

    checkMenu();

    $window.scroll(function () {
      checkMenu();
    });

    function checkMenu() {
      if ($window.scrollTop() >= $mark.offset().top) {
        $mark.height($menu.outerHeight());
        $menu.addClass('sticked');
        $menu.parent().addClass('sticked');
        $menu.removeClass('fixed-size');
      } else {
        $mark.height(0);
        $menu.removeClass('sticked');
        $menu.parent().removeClass('sticked');
        $menu.addClass('fixed-size');
      }
    }

    $('#logo, #gotop')
      .on('mouseenter', function () {
        $logo.addClass('hover');
      })
      .on('mouseleave', function () {
        $logo.removeClass('hover');
      });
  };

  $(document).ready(function () {
    initMenu();
  });
})(jQuery, window, document);

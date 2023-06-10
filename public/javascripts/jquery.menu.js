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
    var $anchors = $('#buttons').find('a');
    var $paths = $('#buttons').find('path');
    var $logo = $('#logo');
    var $gotop = $('#gotop');
    var $mark = $('#mark');

    checkMenu();

    $window.scroll(function () {
      checkMenu();
    });

    function checkMenu() {
      if ($window.scrollTop() >= $mark.offset().top) {
        $mark.height($menu.outerHeight());
        $menu.css({ position: 'fixed' });
        $menu.removeClass('fixed-size');
        $logo.css({ cursor: 'pointer' });
        $gotop.css({ cursor: 'pointer', top: '90px' });
        $menu.stop().animate({ backgroundColor: '#37F' }, durAnim);
        $menu.parent().stop().animate({ backgroundColor: '#37F' }, durAnim);
        $anchors.stop().animate({ color: '#FFF' }, durAnim);
        $gotop.stop().animate({ opacity: 1 }, durAnim);
        $paths.attr({ fill: '#FFF' });
        //$menu.find('.section').last().html($menu.width());
        if ($menu.width() < 650) {
          var percent = ($menu.width() / 500) * 100;
          $menu.find('.section').css({ fontSize: percent + '%' });
        } else {
          $menu.find('.section').css({ fontSize: percent + '100%' });
        }
      } else {
        $mark.height(0);
        $menu.css({ position: 'relative' });
        $menu.addClass('fixed-size');
        $logo.css({ cursor: 'default' });
        $gotop.css({ cursor: 'default', top: '-100%' });
        $menu.stop().animate({ backgroundColor: '#FFF' }, durAnim);
        $menu.parent().stop().animate({ backgroundColor: '#FFF' }, durAnim);
        $anchors.stop().animate({ color: '#37F' }, durAnim);
        $gotop.stop().animate({ opacity: 0 }, durAnim);
        $paths.attr({ fill: '#37F' });
        if ($menu.width() < 650) {
          var percent = ($menu.width() / 500) * 100;
          $menu.find('.section').css({ fontSize: percent + '%' });
        } else {
          $menu.find('.section').css({ fontSize: percent + '100%' });
        }
      }
    }

    $('.section a').click(function (e) {
      e.preventDefault();
      var anchor = $(e.target).parent().attr('hrefx');
      $('html,body').animate(
        {
          scrollTop: $(anchor).offset().top - $('#wrap-menu').outerHeight() + 1,
        },
        durGo,
        'custom'
      );
    });

    $('#logo, #gotop')
      .click(function () {
        $('html,body').animate({ scrollTop: 0 }, durGo, 'custom');
      })
      .hover(
        function () {
          $logo.find('img').attr('src', 'images/go-top.svg');
        },
        function () {
          $logo.find('img').attr('src', 'images/logo.svg');
        }
      );
  };

  $(document).ready(function () {
    initMenu();
  });
})(jQuery, window, document);

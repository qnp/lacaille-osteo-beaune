(function ($, window, document, undefined) {
  'use strict';

  var dur = 200;

  $(window).ready(function () {
    $('#footer img').hover(
      function () {
        $('#lou-hover').stop().animate({ opacity: 1 }, 200);
      },
      function () {
        $('#lou-hover').stop().animate({ opacity: 0 }, 200);
      }
    );
  });
})(jQuery, window, document);

// signature in console
var styleConsole = function (size, bold) {
  var style = 'color: #222; font-size: ' + size + 'px;';
  if (bold) style += ' font-weight: bold';
  return style;
};
console.log('%cThis website was made with ♥ by:', styleConsole(11, false));
console.log('%cvarin.benjamin@gmail.com', styleConsole(11, true));
console.log('%c-> [Graphic Design, Art Direction]', styleConsole(11, false));
console.log('%cfrancois.risoud@gmail.com', styleConsole(11, true));
console.log('%c-> [Development]', styleConsole(11, false));
console.log(
  '%cLou-Anne Lacaille © ' + new Date().getFullYear(),
  'color: #AAA; font-size: 11px;'
);

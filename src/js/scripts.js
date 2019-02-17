(function ($, window, document, undefined) {

  'use strict';

  $(document).ready(function(){
    $('.hamburger').click(function(){
      $(this).toggleClass('open');
      $(".mobile-menu").fadeToggle();
      $('body').toggleClass('overflow-hidden');
    });
  });

})(jQuery, window, document);

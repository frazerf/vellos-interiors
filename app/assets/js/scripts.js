/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2019. MIT licensed.
 */
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

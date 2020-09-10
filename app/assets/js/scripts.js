/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2020. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(document).ready(function(){
    $('.hamburger').click(function(){
      $(this).toggleClass('open');
      $('.mobile-menu').fadeToggle();
      $('body').toggleClass('overflow-hidden');
    });
  });

  $("a[href^='#']").click(function(e) {
    e.preventDefault();
    
    var position = $($(this).attr('href')).offset().top;
  
    $('body, html').animate({
      scrollTop: position
    }, 1000 );
    $('.mobile-menu').fadeToggle();
    $('body').toggleClass('overflow-hidden');
    $('.hamburger').toggleClass('open');
  });

  $(document).ready(function(){
    $('.home-carousel').slick({
      arrows: false,
      infinite: true,
      speed: 1000,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 10000,
      pauseOnHover: false
    });
  });

  $(function() {
    $('.lazy').Lazy();
  });

})(jQuery, window, document);

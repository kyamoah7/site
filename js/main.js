$(document).ready( function(){
  /*scroll navigation*/
  var headerHeight = $('header').outerHeight();
  $('.smooth').click(function(e){
    var linkHref = $(this).attr('href');
    $('html, body').animate({
      scrollTop : $(linkHref).offset().top - headerHeight
    }, 1000);
    e.preventDefault();
  });

  /* carousel for about div*/

  $('#right-arrow').click(function(){

    var currentSlide = $('.slide.active');
    var nextSlide = currentSlide.next();

    currentSlide.slideToggle(300).removeClass('active');
    nextSlide.slideToggle(300).addClass('active');
    if(nextSlide.length == 0){
      $('.slide').first().slideToggle(300).addClass('active');
    }
  });
  $('#about').click(function(){

  });
  $('#left-arrow').click(function(){


    var currentSlide = $('.slide.active');
    var prevSlide = currentSlide.prev();

    currentSlide.slideToggle(300).removeClass('.active');
    prevSlide.slideToggle(300).addClass('active');

    if(prevSlide.length == 0){
      $('.slide').last().slideToggle(300).addClass('.active');
    }
  });
  $('.menu-toggle').click(function() {

    $('.site-nav').toggleClass('site-nav--open', 500);
    $(this).toggleClass('open');

  })
});

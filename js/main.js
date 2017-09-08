$(document).ready( function(){
  /*scroll navigation*/
  var headerHeight = $('header').outerHeight();
  $('.smooth').click(function(e){
    var linkHref = $(this).attr('href');
    $('html, body').animate({
      scrollTop : $(linkHref).offset().top - headerHeight
    }, 1000);
    e.preventDefault();
  })

  /* carousel for about div*/
  $('#right-arrow').click(function(){
    var bio = $('#bio');
    bio.slideToggle(300);
    /*var currentSlide = $('.slide1.active');
    var nextSlide = currentSlide.next();

    currentSlide.slideToggle(300).removeClass('active');
    nextSlide.slideToggle(300).addClass('active');
    if(nextSlide.length == 0){
      $('.slide').first().slideToggle(300).addClass('active');
    }*/
  });
  $('#left-arrow').click(function(){
    var portfolio = $('#portfolio');
    portfolio.slideToggle(300);
    /*var currentSlide = $('.slide2.active');
    var prevSlide = currentSlide.prev();

    currentSlide.slideToggle(300).removeClass('active');
    prevSlide.slideToggle(300).addClass('active');

    if(prevSlide.length == 0){
      $('.slide').last().slideToggle(300).addClass('.active');
    }*/
  });
  $('.burger-nav').click(function(){
      $('nav ul ').toggleClass('open');
    });
});

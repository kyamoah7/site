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
  var bio = $('#bio');
  var portfolio = $('#portfolio');
  var about = $('.aboutword')
  $('#right-arrow').click(function(){

    bio.slideToggle(300);
    portfolio.addClass('deactive');
    about.toggleClass('out');

    /*var currentSlide = $('.slide1.active');
    var nextSlide = currentSlide.next();

    currentSlide.slideToggle(300).removeClass('active');
    nextSlide.slideToggle(300).addClass('active');
    if(nextSlide.length == 0){
      $('.slide').first().slideToggle(300).addClass('active');
    }*/
  });
  $('#about').click(function(){

  });
  $('#left-arrow').click(function(){

    portfolio.slideToggle(300);
    portfolio.addClass('deactive');
    about.toggleClass('out');
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

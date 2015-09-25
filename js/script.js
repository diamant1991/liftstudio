$('input,textarea').focus(function(){
  $(this).data('placeholder',$(this).attr('placeholder'))
  $(this).attr('placeholder','');
});
$('input,textarea').blur(function(){
  $(this).attr('placeholder',$(this).data('placeholder'));
});

$('form').bind('submit', function(event) {
    $(this).find('[type=text]').each(function() {
      if(!$(this).val().length) { 
         event.preventDefault();
         $(this).addClass('error');
      }
      else{
         $(this).removeClass('error');
      }
    });
});


$(function(){
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top ==0) $(".menu-fixed").slideDown(250);
        else $(".menu-fixed").slideUp(350);
    });
});

$(document).ready(function() {

  $('.get-call').click(function(){
      $('.form-mask').fadeIn(300);
      $('.pop-up').fadeIn(300);
    })


    $('.form-mask').click(function(){
     $('.pop-up,.form-mask').fadeOut(300);
  })

  $(document).keyup(function(d) {
      if (d.keyCode == 27) {
          $('.form-mask').fadeOut(300);
          $('.pop-up').fadeOut(300);
      }
  });


    $('.navbar-fixed-top').hover(
      function () {
        if(($('.menu-fixed').css('display')=='none')){
          $('.menu-fixed').slideDown(250);
        }
  });
    
	 $('a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top - 96
      }, 1300);
      e.preventDefault();
   });
   return false;

 
});

jQuery(function($){
  $(".tel-mask").mask("+7 (999) 999-9999");
});
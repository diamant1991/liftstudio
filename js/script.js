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
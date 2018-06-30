$(document).ready(function(){
  
  
    var touch = $('.nav__btn');
    var menu = $('.nav__ul');
    var dropMenu = $('.nav__drop-link'); 
   
    $(touch).on('click', function(e) {
      e.preventDefault();
      menu.toggleClass('nav__ul_active');
      $(this).toggleClass('nav__btn_active');
    });

    $(window).resize(function(){
      var wid = $(window).width();
      if(wid > 960 && menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });

    $('.nav__icon-drop-menu').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('nav__icon-drop-menu-active');
      $(this).parent().next('.drop-menu').toggleClass('drop-menu-active');
    });
  

});
//menu.slideToggle();
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

    $('.js-single-item').slick({
      autoplay: true,
      autoplaySpeed: 8000,
    });

     $('.js-single-item-2').slick({
      autoplay: true,
      autoplaySpeed: 8000,
    });

  /* ----------Popup-----------*/

$('#js-topL-popup').magnificPopup({
     items: [
      {
        src: '<div class="js-topL-modal"><h3>Заявка на замер</h3><form><label></label><input type="text" name="text" placeholder="Ваше имя" required><br><label></label><input type="tel" name="phone" placeholder="Ваш номер телефона" required><br><label></label><textarea name="textarea" placeholder="Введите здесь адрес или оставьте сообщение" required></textarea><hr><small>Оставьте заявку или свяжитесь с нами по телефону: <a href="/+78129420128">+7812 942 01 28</a><br>(Мы работаем в будние дни с 10 до 20 часов.)</small><button type="button" class="btn-def">Отправитить</button></form></div>',
        type: 'inline'
      }
    ],
    
    type: 'image' // this is default type
  });



});


$(document).ready( function() {

  $(".form").on("click", ".tab", function() {
    // Удаляем все классы active в .form
    $(".form").find(".active").removeClass("active");
    // Добаляем класс active на кликнутый элемент
    $(this).addClass("active");
    // Добавляем класс active на тот .tab-form котороый соответсвует
    // индексу  кликнутого таба (.tab[0] == .tab-form[0] и т.д.)
    $(".tab-form").eq($(this).index()).addClass("active");
  });

  // Анимация плавающего текста
  $(".input").focus(function() {
    // при фокусе input'а добавляем класс focus
    $(this).parent().addClass("focus");
  }).blur(function() { // при потере фокуса и если поле не заполняли удаляем класс focus
    if($(this).val() === '') {
      $(this).parent().removeClass("focus");
    }
  });
});
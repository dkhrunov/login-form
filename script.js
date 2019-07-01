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

  // Анимация при клике на кнопку - пульсация
  // находим кнопки в документе
  let buttons = document.getElementsByClassName('button'),
      // берем метод массива forEach
      forEach = Array.prototype.forEach;

  // на каждую кнопку вещаем обработчик событий клика и выполняем функцию addElement 
  forEach.call(buttons, function(b) {
    b.addEventListener('click', addElement);
  });

  // функция выполняющая при клике
  function addElement() {
    // создаем div элемент
    let addDiv = document.createElement('div'),
        // выбираем макс знач из ширины и высоты кнопки
        mValue = Math.max(this.clientWidth, this.clientHeight),
        // сокращения
        sDiv   = addDiv.style,
        px     = 'px';

    // для блока блока div ставим стили высоты и ширины = макс знач
    sDiv.width = sDiv.height = mValue + px;

    // добавляем класс блоку div
    addDiv.classList.add('pulse');
    // добавляем в документ блок div
    this.appendChild(addDiv);
  }
});
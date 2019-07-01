$(document).ready(function () {

	$(".form").on("click", ".tab", function () {
		// Удаляем все классы active в .form
		$(".form").find(".active").removeClass("active");
		// Добаляем класс active на кликнутый элемент
		$(this).addClass("active");
		// Добавляем класс active на тот .tab-form котороый соответсвует
		// индексу  кликнутого таба (.tab[0] == .tab-form[0] и т.д.)
		$(".tab-form").eq($(this).index()).addClass("active");
	});

	// Анимация плавающего текста
	$(".input").focus(function () {
		// при фокусе input'а добавляем класс focus
		$(this).parent().addClass("focus");
	}).blur(function () { // при потере фокуса и если поле не заполняли удаляем класс focus
		if ($(this).val() === '') {
			$(this).parent().removeClass("focus");
		}
	});

	// Анимация по клику на кнопку
	$(".button").on("click", function (e) {
		// выбираем макс знач из ширины и высоты кнопки
		let mValue = Math.max(this.clientWidth, this.clientHeight);
		// получаем объект, в котором храниться вся информация о кнопке
		let rect = this.getBoundingClientRect();

		// позицианирование анимации на место клика относительно оси X и Y
		let divL = e.clientX - rect.left - (mValue / 2) + 'px',
			divT = e.clientY - rect.top - (mValue / 2) + 'px';

		// добавляем элемент в докуммент с задаными параметрами
		let div = $('<div>', {
			class: 'pulse',
			css: {
				width: mValue + 'px',
				height: mValue + 'px',
				left: divL,
				top: divT
			}
		}
		).appendTo(".button");

		// удаляем элемент после анимации
		setTimeout(function () {
			div.remove();
		}, 700);
	});

	/*
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
	  function addElement(e) {
		// создаем div элемент
		let addDiv = document.createElement('div'),
			// выбираем макс знач из ширины и высоты кнопки
			mValue = Math.max(this.clientWidth, this.clientHeight),
			// получаем объект, в котором храниться вся информация о кнопке
			rect   = this.getBoundingClientRect(),
			// сокращения
			sDiv   = addDiv.style,
			px     = 'px';
	
		// для блока блока div ставим стили высоты и ширины = макс знач
		sDiv.width = sDiv.height = mValue + px;
		// смещаем блок div на место клика относительно оси X
		sDiv.left  = e.clientX - rect.left - (mValue / 2) + px;
		// смещаем блок div на место клика относительно оси Y
		sDiv.top   = e.clientY - rect.top - (mValue / 2) + px;
	
		// добавляем класс блоку div
		addDiv.classList.add('pulse');
		// добавляем в документ блок div
		this.appendChild(addDiv);
	  }
	*/
});
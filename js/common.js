"use strict";
document.addEventListener('DOMContentLoaded', function () {
	var skillsImg = document.querySelectorAll('.skills-img'),
		headerTitle = document.querySelector('.header-subtitle'),
		btnMenu = document.querySelector('.btn-menu'),
		btnTop = document.querySelector('.btn-top'),
		btnScroll = document.querySelector('.scroll-button'),
		hideMenu = document.querySelector('.mobile-nav'),
		hidden = document.querySelectorAll('.is-hide'),
		hiddenBtn = document.querySelector('.hidden-btn'),
		progress = document.querySelector('progress');
	setTimeout(showTextTitle, 100);
	window.addEventListener('scroll', function (e) {
		// скролл 
		e.preventDefault();
		goToTop();
		scrollY(progress);
	});
	btnScroll.addEventListener('click', function () {
		document.querySelector('.about-me').scrollIntoView({
			block: "start",
			behavior: "smooth"
		});
	});
	skillsImg.forEach(function (item) {
		//массив картинок
		item.addEventListener('click', function () {
			item.classList.toggle('welens-animation');
		});
	});
	btnMenu.addEventListener('click', function () {
		// адаптив меню
		hideMenu.classList.toggle('hide-menu');
		hideMenu.classList.toggle('mobile-active');

		if (btnMenu.classList.contains('is-active')) {
			btnMenu.classList.remove('is-active');
		} else {
			btnMenu.classList.add('is-active');
		}
	});

	function showTextTitle() {
		var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : headerTitle;
		var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : headerTitle;
		//выпадающий текст
		text.textContent = "< Frontend - \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A />";
		el.innerHTML = el.textContent.split('').map(function (n) {
			return "<span class=\"new-title hidden-title\">".concat(n, "</span>");
		}).join('');
		el.querySelectorAll('span').forEach(function (n, i) {
			return setTimeout(function () {
				return n.classList.remove('hidden-title');
			}, 80 * i);
		});
	}

	function goToTop() {
		//скролл наверх
		if (window.pageYOffset >= 150) {
			btnTop.style.opacity = '0.6';
		} else {
			btnTop.style.opacity = '0';
		}
	}

	btnTop.addEventListener('click', function (e) {
		// кнопка скролла наверх
		e.preventDefault();
		window.scrollTo(0, 0);
	});
	hiddenBtn.addEventListener('click', function () {
		// кнопка с раскрытием блока, я не знаю, правильно-ли вообще так делать но это работает
		hidden.forEach(function (item) {
			item.classList.toggle('is-showed');

			if (item.classList.contains('is-hide')) {
				item.classList.remove('is-hide');
				hiddenBtn.textContent = "\u0421\u043A\u0440\u044B\u0442\u044C";
				document.querySelector('.first-item').scrollIntoView({
					block: "center",
					behavior: "smooth"
				});
			} else {
				item.classList.add('is-hide');
				hiddenBtn.textContent = "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0435";
				document.querySelector('.last-item').scrollIntoView({
					block: "center",
					behavior: "smooth"
				});
			}
		});
	});

	function scrollY(p) {
		var height = window.pageYOffset;
		p.value = height;
		p.max = document.body.clientHeight - screen.height;
		if (height === 0) {
			p.style.opacity = 0;
		} else {
			p.style.opacity = 0.8;
		}
	}
	// end
});
		jQuery(function ($) {
			$("#phone_1").mask("+7 (999) 999-99-99");
			$("#phone_2").mask("+7 (999) 999-99-99");
			$("#phone_3").mask("+7 (999) 999-99-99");
			$("#phone_4").mask("+7 (999) 999-99-99");
		});

		$(document).ready(function () {
			$('.popup-alert-close').on('click', function (event) {
				event.preventDefault();
				$('.popup-alert').fadeOut();
				$('.popup').fadeOut();
			});
			/* --------------------------------------*/
			$('.btn-order').on('click', function (event) {
				event.preventDefault();
				$('.popup-feedback').fadeIn();
			});

			$('.popup-feedback-close').on('click', function (event) {
				event.preventDefault();
				$('.popup-feedback').fadeOut();
			});
			/* --------------------------------------*/
			$('.btn-more').on('click', function (event) {
				event.preventDefault();
				$('.popup-more').fadeIn();
			});

			$('.popup-more-close').on('click', function (event) {
				event.preventDefault();
				$('.popup-more').fadeOut();
			});
			/*----------------------------------------*/
			$('.production-content-button-calc').on('click', function (event) {
				event.preventDefault();
				$('.popup-feedback').fadeIn();
			});

			$('.popup-feedback-close').on('click', function (event) {
				event.preventDefault();
				$('.popup-feedback').fadeOut();
			});

			/* ---------------------------------------*/
			$(".slowly").on("click", function (event) {
				//Отменяем стандартную обработку нажатия по ссылке.
				event.preventDefault();
				//Забираем идентификатор блока с атрибута href.
				var id = $(this).attr('href'),
					//Узнаём высоту от начала страницы до блока, на который ссылается якорь.
					top = $(id).offset().top;
				//Анимируем переход на расстояние - top за 1000ms.
				$('body,html').animate({
					scrollTop: top
				}, 1000);
			});
			/* ---------------------------------------*/
		});

		/* ---------------------------------------*/



		/*Slick Script*/
		$('.making-slider-for').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			asNavFor: '.making-slider-nav',
			responsive: [{
				breakpoint: 768,
				settings: {
					prevArrow: '<button class="making-arrow-prev"></button>',
					nextArrow: '<button class="making-arrow-next"></button>',
				}
			}, ]
		});
		$('.making-slider-nav').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow: '<button class="making-arrow-prev"></button>',
			nextArrow: '<button class="making-arrow-next"></button>',
			asNavFor: '.making-slider-for',
			dots: false,
			arrows: true,
			centerMode: true,
			focusOnSelect: true,
			responsive: [{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					}
				},
			]
		});


		$('.feedback-slider-nav').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: '<button class="prev arrow"></button>',
			nextArrow: '<button class="next arrow"></button>',
			arrows: true,
			focusOnSelect: true,
			responsive: [{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						prevArrow: '<button class="making-arrow-prev"></button>',
						nextArrow: '<button class="making-arrow-next"></button>',
					}
				},
			]
		});

		$('.bid').submit(function (event) {
			event.preventDefault();
			$.ajax({
				type: "POST",
				url: "mailer/smart.php",
				data: $(this).serialize()
			}).done(function () {
				$(this).find("input").val("");
				$('.popup-feedback').fadeOut();
				$('.popup-more').fadeOut();
				$('.popup-alert').fadeIn();
				$("form").trigger("reset");
			});
			return false;
		});
document.addEventListener("DOMContentLoaded", function () {
	// PROGRESSBAR
	function progressBar(node, nodeLine, tooltip, animationSpeed = 1500) {
		const progressItem = $(node);
		progressItem.each(function (value, item) {
			$(item).find(nodeLine).animate({
				width: item.dataset.progress + '%'
			}, animationSpeed);
			$(item).find(tooltip).show(animationSpeed);
		})
	};
	//SCROLL ANIMATION
	let animate = true;
	$(window).scroll(function () {
		if ($('.skills').offset().top <= $(this.window).scrollTop() + 550) {
			if (animate) {
				progressBar('.progress-item', '.progress-line', '.progress-tooltip');
			}
			animate = false;
		}
	})
	//BUTTON TOP
	$(window).scroll(goToTop);

	function goToTop() {
		if (window.pageYOffset >= 250) {
			$('.btn-top').addClass('btn-visible')
		} else {
			$('.btn-top').removeClass('btn-visible')
		}
	}
	$('.btn-top').on('click', function () {
		window.scrollTo(0, 0);
	})
	// SLIDER
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		navText: [],
		items: 5,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			768: {
				items: 3
			},
			980: {
				items: 5
			}
		}
	})
});
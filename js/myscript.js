
'use strict';

const w = $(window).width();
const spwidth = 767;
const tabletwidth = 1025;

{
	const openMenu = document.getElementById('menu_open');
	const Nav = document.querySelector('header nav');
	const Body = document.querySelector('body');
	const overlay = document.getElementById('overlay');

	openMenu.addEventListener('click', function () {
		openMenu.classList.toggle('active');
		Nav.classList.toggle('active');
		Body.classList.toggle('active');
		overlay.classList.toggle('active');
	});
}


$(function () {
	$("body").removeClass("preload");
	// JQueryの範囲

	var rellax = new Rellax('.rellax', {
		// center: true
		callback: function (position) {
			// callback every position change
			// console.log(position);
		},
		breakpoints: [576, 768, 1024]
	});

	// ヘッダー追従
	$(window).on('load scroll', function () {
		if ($(window).scrollTop() > 100) {
			$('header').addClass('active');
		} else {
			$('header').removeClass('active');
		}
	});

	$(window).on('scroll load',function(){
		$('.history01 .history_box .img').each(function () {
			var position = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > position - windowHeight + 200) {
				$(this).addClass('active');
			}
		});
	});

});
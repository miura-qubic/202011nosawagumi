
'use strict';

const w = $(window).width();
const spwidth = 767;
const tabletwidth = 1025;

{
	const openMenu = document.getElementById('menu_open');
	const Nav = document.querySelector('header nav');

	openMenu.addEventListener('click', function () {
		openMenu.classList.toggle('active');
		Nav.classList.toggle('active');
	});
}


$(function () {
	$("body").removeClass("preload");
	// JQueryの範囲

	var rellax = new Rellax('.rellax', {
		// center: true
		callback: function (position) {
			// callback every position change
			console.log(position);
		},
		breakpoints: [576, 768, 1024]
	});



});
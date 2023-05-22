/*eslint-disable*/
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';


export default function testimonials() {
	// init Swiper:
	const swiper = new Swiper('.testimonials__slider', {
		//3 slides per view
		slidesPerView: 1,
		// Gap between slides
		spaceBetween: 30,
		grabCursor: true,
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		modules: [Navigation, Pagination],
		breakpoints: {
			// when window width is < 1024px
			1024: {
				slidesPerView: 2,
			},
		},
	});
}
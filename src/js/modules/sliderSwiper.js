import Swiper, { Navigation } from 'swiper';

function sliderSwiper(content, buttonPrev, buttonNext) {
  new Swiper(content, {
    modules: [Navigation],
    speed: 400,
    spaceBetween: 100,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
  })
}

export default sliderSwiper;
import Swiper from '../vendor/swiper.js';
import {createNews} from './init-news.js';

const heroSliderNode = document.querySelector('.hero');
const programsSliderNode = document.querySelector('.programs__slider');

const initHeroSlider = () => {
  let swiperTouchStartX;

  new Swiper(heroSliderNode, {
    speed: 300,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    effect: 'fade',
    fadeEffect: {
      crossFade: false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      320: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: true,
      },
      1200: {
        allowTouchMove: false,
      },
    },
    on: {
      touchStart(swiper, e) {
        if (e.type === 'touchstart') {
          swiperTouchStartX = e.touches[0].clientX;
        } else {
          swiperTouchStartX = e.clientX;
        }
      },
      touchEnd(swiper, e) {
        const tolerance = 150;
        const totalSlidesLen = swiper.slides.length;
        const diff = (() => {
          if (e.type === 'touchend') {
            return e.changedTouches[0].clientX - swiperTouchStartX;
          } else {
            return e.clientX - swiperTouchStartX;
          }
        })();
        if (swiper.isBeginning && diff >= tolerance) {
          swiper.slideTo(totalSlidesLen - 1);
        } else if (swiper.isEnd && diff <= -tolerance) {
          setTimeout(() => {
            swiper.slideTo(0);
          }, 1);
        }
      },
    },
  });
};

const lineChild = document.querySelector('.programs__inner-line');
const lineParent = document.querySelector('.programs__line');
const slides = document.querySelectorAll('.programs__card');

const initProgramsSlider = () => {
  let screenWidth = window.innerWidth;
  let widthCount;

  if (screenWidth < 768) {
    widthCount = 0;
  } else if (screenWidth < 1199) {
    widthCount = 1;
  } else {
    widthCount = 2;
  }

  let width = lineParent.offsetWidth / (slides.length - widthCount);
  let currentWidth = width;

  lineChild.style.width = `${currentWidth}px`;

  const swiper = new Swiper(programsSliderNode, {
    speed: 300,
    slidesPerView: 'auto',
    spaceBetween: 0,
    navigation: {
      nextEl: '.programs__btn-next',
      prevEl: '.programs__btn-prev',
    },
    breakpoints: {
      768: {
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
    on: {
      slideChange: () => {
        if (swiper.realIndex > swiper.previousIndex) {
          currentWidth += width;
          lineChild.style.width = `${currentWidth}px`;
        } else {
          currentWidth -= width;
          lineChild.style.width = `${currentWidth}px`;
        }
      },
    },
  });
};

const sliderReviews = document.querySelector('.reviews__slider');
const slidesReviews = document.querySelectorAll('.reviews__item');
const lineParentReviews = document.querySelector('.reviews__line');
const lineChildReviews = document.querySelector('.reviews__inner-line');

const initReviewsSlider = () => {
  let screenWidth = window.innerWidth;
  let widthCount;

  if (screenWidth < 1199) {
    widthCount = 0;
  } else {
    widthCount = 1;
  }

  let width = lineParentReviews.offsetWidth / (slidesReviews.length - widthCount);
  let currentWidth = width;

  lineChildReviews.style.width = `${currentWidth}px`;

  const swiper = new Swiper(sliderReviews, {
    speed: 300,
    spaceBetween: 30,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.reviews__btn-next',
      prevEl: '.reviews__btn-prev',
    },
    on: {
      slideChange: () => {
        if (swiper.realIndex > swiper.previousIndex) {
          currentWidth += width;
          lineChildReviews.style.width = `${currentWidth}px`;
        } else {
          currentWidth -= width;
          lineChildReviews.style.width = `${currentWidth}px`;
        }
      },
    },
  });
};

export {initHeroSlider, initProgramsSlider, initReviewsSlider};

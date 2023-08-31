import {newsData} from '../data-news/data-news';
import Swiper from '../vendor/swiper';

const newsCardNode = document.querySelector('#news-card').content.querySelector('.news-card');
const newsSliderWrapperNode = document.querySelector('.news__container');
const sliderNews = document.querySelector('.news__slider');
const newTabsNode = document.querySelectorAll('.news__btn');

const initNewsSlider = () => {
  createNews(newsData);

  const swiper = new Swiper(sliderNews, {
    speed: 300,
    spaceBetween: 30,
    breakpoints: {
      320: {
        allowTouchMove: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        allowTouchMove: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      1200: {
        allowTouchMove: false,
        slidesPerView: 'auto',
        slidesPerGroup: 3,
        spaceBetween: 32,
      },
    },
    navigation: {
      nextEl: '.news__btn-next',
      prevEl: '.news__btn-prev',
    },
    pagination: {
      el: '.news__pagination',
      clickable: true,
      dynamicMainBullets: 4,
      renderBullet: (index, className) => {
        return '<button class="' + className + '">' + (index + 1) + '</button>';
      },
    },
  });
  newTabsNode.forEach((btn) =>
    btn.addEventListener('click', () => {
      newTabsNode.forEach((el) => {
        el.classList.remove('is-active');
      });

      btn.classList.add('is-active');

      const filter = btn.getAttribute('data-tab');

      if (filter === 'all') {
        createNews(newsData);
      } else {
        const newNews = newsData.filter((el) => el.type === filter);
        createNews(newNews);
      }

      swiper.update();
    })
  );
};

const createNews = (arr) => {
  let breakpointDesktop = window.matchMedia('(min-width: 1200px)');
  let breakpointTablet = window.matchMedia('(min-width: 768px)');
  let breakpointMobile = window.matchMedia('(min-width: 320px)');

  const breakpointChecker = () => {
    switch (true) {
      case breakpointDesktop.matches:
        newsSliderWrapperNode.innerHTML = '';
        arr.forEach((elem, index) => {
          const newCard = createNew(elem);
          if (index % 3 === 0) {
            newCard.classList.add('slide-active');
          }
          newsSliderWrapperNode.appendChild(newCard);
        });
        break;
      case breakpointTablet.matches:
        newsSliderWrapperNode.innerHTML = '';
        let newsDataChunked = chunkArray(arr, 4);

        newsDataChunked.forEach((item) => {
          const element = document.createElement('div');
          element.classList.add('slide-grid');
          element.classList.add('swiper-slide');
          for (let i = 0; i < item.length; i++) {
            const newCard = createNew(item[i]);
            element.appendChild(newCard);
          }
          newsSliderWrapperNode.appendChild(element);
        });
        break;
      case breakpointMobile.matches:
        newsDataChunked = chunkArray(arr, 2);

        newsDataChunked.forEach((item) => {
          const element = document.createElement('div');
          element.classList.add('slide-grid');
          element.classList.add('swiper-slide');
          for (let i = 0; i < item.length; i++) {
            const newCard = createNew(item[i]);
            element.appendChild(newCard);
          }
          newsSliderWrapperNode.appendChild(element);
        });
        break;
    }
  };

  breakpointDesktop.addListener(breakpointChecker);
  breakpointTablet.addListener(breakpointChecker);
  breakpointMobile.addListener(breakpointChecker);
  breakpointChecker();
  return newsSliderWrapperNode;
};


function chunkArray(array, chunkSize) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunkedArray.push(array.slice(i, i + chunkSize));
  }
  return chunkedArray;
}

const createNew = (elem) => {
  const newCard = newsCardNode.cloneNode(true);
  newCard.querySelector('img').src = elem.src;
  newCard.querySelector('img').srcset = elem.srcset;
  newCard.querySelector('source').srcset = elem.webp;
  newCard.querySelector('.news-card__date span').textContent = elem.date;
  newCard.querySelector('.news-card__title h3').textContent = elem.title;
  newCard.querySelector('.news-card__descr p').textContent = elem.text;
  newCard.classList.add('swiper-slide');
  return newCard;
};


export {initNewsSlider, createNews};

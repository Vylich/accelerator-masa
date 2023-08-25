import {newsData} from '../data-news/data-news';

const newsCardNode = document.querySelector('#news-card').content.querySelector('.news-card');
const newsSliderWrapperNode = document.querySelector('.news__container');

const createNews = () => {


  let breakpointDesktop = window.matchMedia('(min-width: 1200px)');
  let breakpointTablet = window.matchMedia('(min-width: 768px)');
  let breakpointMobile = window.matchMedia('(min-width: 320px)');

  const breakpointChecker = () => {
    switch (true) {
      case breakpointDesktop.matches:
        newsSliderWrapperNode.innerHTML = '';
        newsData.forEach((elem, index) => {
          const newCard = createNew(elem);
          if (index % 3 === 0) {
            newCard.classList.add('slide-active');
          }
          newsSliderWrapperNode.appendChild(newCard);
        });
        break;
      case breakpointTablet.matches:
        newsSliderWrapperNode.innerHTML = '';
        let newsDataChunked = chunkArray(newsData, 4);

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
        console.log('zcyst lyb');
        break;
      case breakpointMobile.matches:
        newsDataChunked = chunkArray(newsData, 2);

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
        console.log('мобилка');
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


export {createNews};


const items = document.querySelectorAll('.accordion__item');

const showContentAccordion = () => {
  items.forEach((item) => {
    const headers = item.querySelectorAll('.accordion__header');
    headers.forEach((header) => {
      header.insertAdjacentHTML('beforeEnd', '<button></button>');
      header.addEventListener('click', () => {
        header.blur();
        const activeContent = document.querySelector('#' + header.dataset.acc);
        if (activeContent.classList.contains('is-active')) {
          activeContent.classList.remove('is-active');
          header.classList.remove('is-active');
          activeContent.style.maxHeight = 0;
          item.classList.remove('is-active');
        } else {
          header.classList.add('is-active');
          activeContent.classList.add('is-active');
          item.classList.add('is-active');
          activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
        }
      });
    });
  });
};

export {showContentAccordion};

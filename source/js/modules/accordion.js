
const items = document.querySelectorAll('.accordion__item');

const showContentAccordion = () => {
  items.forEach((item) => {
    const headers = item.querySelectorAll('.accordion__header');
    headers.forEach((header) => {
      header.insertAdjacentHTML('beforeEnd', '<button tabindex="-1" aria-label="Показать скрытый текст"></button>');
      const buttonAccordion = header.querySelector('button');
      item.addEventListener('click', () => {
        item.blur();
        buttonAccordion.blur();
        const activeContent = document.querySelector('#' + item.dataset.acc);
        if (activeContent.classList.contains('is-active')) {
          activeContent.classList.remove('is-active');
          activeContent.style.maxHeight = 0;
          item.classList.remove('is-active');
        } else {
          activeContent.classList.add('is-active');
          item.classList.add('is-active');
          activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
        }
      });
      item.addEventListener('keydown', (e) => {
        if (e.keyCode === 0 || e.keyCode === 32 || e.key === 'Enter') {
          const activeContent = document.querySelector('#' + item.dataset.acc);
          if (activeContent.classList.contains('is-active')) {
            activeContent.classList.remove('is-active');
            activeContent.style.maxHeight = 0;
            item.classList.remove('is-active');
          } else {
            activeContent.classList.add('is-active');
            item.classList.add('is-active');
            activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
          }
        }
      });
    });
  });
};

export {showContentAccordion};

const headers = document.querySelectorAll('.accordion__header');

const showContentAccordion = () => {
  headers.forEach((header) => {
    header.insertAdjacentHTML('beforeEnd', '<button></button>');
    header.addEventListener('click', () => {
      header.blur();
      const activeContent = document.querySelector('#' + header.dataset.acc);
      if (activeContent.classList.contains('is-active')) {
        activeContent.classList.remove('is-active');
        header.classList.remove('is-active');
        activeContent.style.maxHeight = 0;
      } else {
        header.classList.add('is-active');
        activeContent.classList.add('is-active');
        activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
      }
    });
  });
};

export {showContentAccordion};

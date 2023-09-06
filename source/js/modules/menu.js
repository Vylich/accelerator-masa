const btnMenuNode = document.querySelector('.header__button');
const menuNode = document.querySelector('.menu');
const bodyNode = document.querySelector('body');
const headerMenuNode = document.querySelector('.header__menu');
const menuSelects = document.querySelectorAll('.item-select__wrapper');


const initMenu = () => {
  menuNode.classList.add('is-closed');
  bodyNode.classList.remove('is-open-menu');

  btnMenuNode.addEventListener('click', () => {
    if (menuNode.classList.contains('is-closed')) {
      headerMenuNode.insertAdjacentHTML('beforeEnd', '<div class="overlay"></div>');
      menuNode.classList.remove('is-closed');
      menuNode.classList.add('is-opened');
      bodyNode.classList.add('is-open-menu');
      btnMenuNode.classList.add('is-active');
    } else {
      closeMenu();
    }
  });

  document.addEventListener('mouseup', (e) => {
    if (e.target.className === 'overlay' || e.target.tagName === 'A') {
      setTimeout(closeMenu, 100);
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      if (e.target.tagName === 'A') {
        setTimeout(closeMenu, 100);
      }
    }
  });

  menuSelects.forEach((select) => {
    select.addEventListener('click', () => {
      const activeContent = document.querySelector('#' + select.dataset.menu);
      if (activeContent.classList.contains('is-active')) {
        activeContent.classList.remove('is-active');
        select.classList.remove('is-active');
        activeContent.style.maxHeight = 0;
      } else {
        select.classList.add('is-active');
        activeContent.classList.add('is-active');
        activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
      }
    });
    select.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        const activeContent = document.querySelector('#' + select.dataset.menu);
        if (activeContent.classList.contains('is-active')) {
          activeContent.classList.remove('is-active');
          select.classList.remove('is-active');
          activeContent.style.maxHeight = 0;
        } else {
          select.classList.add('is-active');
          activeContent.classList.add('is-active');
          activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
        }
      }
    });
    select.addEventListener('keydown', (e) => {
      if (e.keyCode === 32) {
        const activeContent = document.querySelector('#' + select.dataset.menu);
        if (activeContent.classList.contains('is-active')) {
          activeContent.classList.remove('is-active');
          select.classList.remove('is-active');
          activeContent.style.maxHeight = 0;
        } else {
          select.classList.add('is-active');
          activeContent.classList.add('is-active');
          activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
        }
      }
    });
  });
};

const closeMenu = () => {
  menuNode.classList.add('is-closed');
  menuNode.classList.remove('is-opened');
  bodyNode.classList.remove('is-open-menu');
  btnMenuNode.classList.remove('is-active');
  const overlay = headerMenuNode.querySelector('.overlay');
  overlay.parentNode.removeChild(overlay);
};

export {initMenu};

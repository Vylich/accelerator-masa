import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initHeroSlider, initProgramsSlider, initReviewsSlider} from './modules/slider';
import {createMap} from './modules/map';
import {initDropdown} from './modules/dropdown';
import {showContentAccordion} from './modules/accordion';
import {initNewsSlider} from './modules/init-news';
import {initMenu} from './modules/menu';
import {initDropdownModal} from './modules/dropdown';
import {resetFocus} from './utils/reset-focus';
import {initValidate} from './modules/form';
import {onEventCalllback} from './modules/phone-mask.js';

const phoneInputs = document.querySelectorAll('[data-phone-pattern]');
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  if (phoneInputs) {
    for (let elem of phoneInputs) {
      for (let ev of ['input', 'blur', 'focus']) {
        elem.addEventListener(ev, onEventCalllback);
      }
    }
  }

  resetFocus();
  iosVhFix();
  initHeroSlider();
  createMap();
  initProgramsSlider();
  initDropdown();
  initReviewsSlider();
  showContentAccordion();
  initNewsSlider();
  initMenu();
  initDropdownModal();
  initValidate();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

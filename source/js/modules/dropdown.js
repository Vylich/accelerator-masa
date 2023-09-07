const dropDownWrapper = document.querySelector('.dropdown');
const dropDownBtn = dropDownWrapper.querySelector('.dropdown__btn');
const dropDownField = document.querySelector('.form__sity-wrap');
const dropDownTextWrap = dropDownWrapper.querySelector('.dropdown__text-wrap');
const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
const dropDownListItems = dropDownList.querySelectorAll('.dropdown__item');
const dropdownSelect = document.querySelector('.form__sity-select');
const dropdownText = dropDownWrapper.querySelector('.dropdown__text');
const modalDropDownWrapper = document.querySelector('.dropdown-modal');
const modalDropDownBtn = modalDropDownWrapper.querySelector('.dropdown-modal__btn');
const modalDropDownList = modalDropDownWrapper.querySelector('.dropdown-modal__list');
const modalDropDownListItems = modalDropDownList.querySelectorAll('.dropdown-modal__item');
const modalDropdownSelect = document.querySelector('.modal__sity-select');
const modalDropdownText = modalDropDownWrapper.querySelector('.dropdown-modal__text');


const initDropdown = () => {

  dropDownTextWrap.addEventListener('click', (e) => {
    dropdownSelect.value = '';
    dropDownList.classList.toggle('dropdown__list--visible');
    dropDownBtn.classList.add('is-active');

    if (!dropDownList.classList.contains('dropdown__list--visible')) {
      dropDownBtn.classList.remove('is-active');
      e.target.blur();
    }
  });

  dropDownField.addEventListener('keydown', (e) => {
    if (e.keyCode === 0 || e.keyCode === 32) {
      dropdownSelect.value = '';
      dropDownList.classList.toggle('dropdown__list--visible');
      dropDownBtn.classList.add('is-active');

      if (!dropDownList.classList.contains('dropdown__list--visible')) {
        dropDownBtn.classList.remove('is-active');
        e.target.blur();
      }

    }
    if (e.key === 'Enter') {
      dropdownSelect.value = '';
      dropDownList.classList.toggle('dropdown__list--visible');
      dropDownBtn.classList.add('is-active');

      if (!dropDownList.classList.contains('dropdown__list--visible')) {
        dropDownBtn.classList.remove('is-active');
        e.target.blur();
      }
    }
  });

  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', (e) => {
      dropdownText.textContent = listItem.textContent;
      dropdownSelect.value = listItem.dataset.value;
      dropDownList.classList.remove('dropdown__list--visible');

      const currentItem = e.target;

      dropDownListItems.forEach(function (item) {
        item.classList.remove('dropdown__item--active');
      });

      currentItem.classList.add('dropdown__item--active');
      dropDownBtn.classList.remove('dropdown__button--active');
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if (e.target === listItem) {
          dropdownText.textContent = listItem.textContent;
          dropdownSelect.value = listItem.dataset.value;
          dropDownList.classList.remove('dropdown__list--visible');

          const currentItem = e.target;

          dropDownListItems.forEach(function (item) {
            item.classList.remove('dropdown__item--active');
          });

          currentItem.classList.add('dropdown__item--active');
          dropDownBtn.classList.remove('dropdown__button--active');
        }

      }
      if (e.keyCode === 0 || e.keyCode === 32) {
        if (e.target === listItem) {
          dropdownText.textContent = listItem.textContent;
          dropdownSelect.value = listItem.dataset.value;
          dropDownList.classList.remove('dropdown__list--visible');

          const currentItem = e.target;

          dropDownListItems.forEach(function (item) {
            item.classList.remove('dropdown__item--active');
          });

          currentItem.classList.add('dropdown__item--active');
          dropDownBtn.classList.remove('dropdown__button--active');
        }
      }
    })
  });

  document.addEventListener('click', function (e) {
    if (e.target !== dropDownTextWrap) {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });
};

const initDropdownModal = () => {
  modalDropdownSelect.value = '';
  modalDropDownBtn.addEventListener('click', function (e) {
    modalDropDownList.classList.toggle('dropdown-modal__list--visible');
    this.classList.add('dropdown-modal__button--active');

    if (!modalDropDownList.classList.contains('dropdown-modal__list--visible')) {
      modalDropDownBtn.classList.remove('dropdown-modal__button--active');
      e.target.blur();
    }
  });

  modalDropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      modalDropdownText.innerText = this.innerText;
      modalDropdownSelect.value = this.dataset.value;
      modalDropDownList.classList.remove('dropdown-modal__list--visible');

      const currentItem = e.target;

      modalDropDownListItems.forEach(function (item) {
        item.classList.remove('dropdown-modal__item--active');
      });

      currentItem.classList.add('dropdown-modal__item--active');
      modalDropDownBtn.classList.remove('dropdown-modal__button--active');
    });
  });

  document.addEventListener('click', function (e) {
    if (e.target !== modalDropDownBtn) {
      modalDropDownBtn.classList.remove('dropdown-modal__button--active');
      modalDropDownList.classList.remove('dropdown-modal__list--visible');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
      modalDropDownBtn.classList.remove('dropdown-modal__button--active');
      modalDropDownList.classList.remove('dropdown-modal__list--visible');
    }
  });
};

export {initDropdown, initDropdownModal};

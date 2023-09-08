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
const modalDropDownField = document.querySelector('.modal__sity-wrap');
const modalDropDownTextWrap = modalDropDownWrapper.querySelector('.dropdown-modal__text-wrap');
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
    if (e.keyCode === 0 || e.keyCode === 32 || e.key === 'Enter') {
      dropdownSelect.value = '';
      dropDownList.classList.toggle('dropdown__list--visible');
      dropDownBtn.classList.add('is-active');
      if (!dropDownList.classList.contains('dropdown__list--visible')) {
        dropDownBtn.classList.remove('is-active');
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
      dropDownBtn.classList.remove('is-active');
    });
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 0 || e.keyCode === 32 || e.key === 'Enter') {
        if (e.target === listItem) {
          dropdownText.textContent = listItem.textContent;
          dropdownSelect.value = listItem.dataset.value;
          dropDownList.classList.remove('dropdown__list--visible');
          const currentItem = e.target;
          dropDownListItems.forEach(function (item) {
            item.classList.remove('dropdown__item--active');
          });
          currentItem.classList.add('dropdown__item--active');
          dropDownBtn.classList.remove('is-active');
        }
      }
    });
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
  modalDropDownTextWrap.addEventListener('click', (e) => {
    modalDropdownSelect.value = '';
    modalDropDownList.classList.toggle('dropdown-modal__list--visible');
    modalDropDownBtn.classList.add('is-active');
    if (!modalDropDownList.classList.contains('dropdown-modal__list--visible')) {
      modalDropDownBtn.classList.remove('is-active');
      e.target.blur();
    }
  });

  modalDropDownField.addEventListener('keydown', (e) => {
    if (e.keyCode === 0 || e.keyCode === 32 || e.key === 'Enter') {
      modalDropdownSelect.value = '';
      modalDropDownList.classList.toggle('dropdown-modal__list--visible');
      modalDropDownBtn.classList.add('is-active');
      if (!modalDropDownList.classList.contains('dropdown-modal__list--visible')) {
        modalDropDownBtn.classList.remove('is-active');
      }
    }
  });

  modalDropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      modalDropdownText.textContent = listItem.textContent;
      modalDropdownSelect.value = listItem.dataset.value;
      modalDropDownList.classList.remove('dropdown-modal__list--visible');
      const currentItem = e.target;
      modalDropDownListItems.forEach(function (item) {
        item.classList.remove('dropdown-modal__item--active');
      });
      currentItem.classList.add('dropdown-modal__item--active');
      modalDropDownBtn.classList.remove('is-active');
    });
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 0 || e.keyCode === 32 || e.key === 'Enter') {
        if (e.target === listItem) {
          modalDropdownText.textContent = listItem.textContent;
          modalDropdownSelect.value = listItem.dataset.value;
          modalDropDownList.classList.remove('dropdown-modal__list--visible');
          const currentItem = e.target;
          modalDropDownListItems.forEach(function (item) {
            item.classList.remove('dropdown-modal__item--active');
          });
          currentItem.classList.add('dropdown-modal__item--active');
          modalDropDownBtn.classList.remove('is-active');
        }
      }
    });
  });

  document.addEventListener('click', function (e) {
    if (e.target !== modalDropDownTextWrap) {
      modalDropDownBtn.classList.remove('dropdown-modal__button--active');
      modalDropDownList.classList.remove('dropdown-modal__list--visible');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      modalDropDownBtn.classList.remove('dropdown-modal__button--active');
      modalDropDownList.classList.remove('dropdown-modal__list--visible');
    }
  });
};

export {initDropdown, initDropdownModal};

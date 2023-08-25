const dropDownWrapper = document.querySelector('.dropdown');
const dropDownBtn = dropDownWrapper.querySelector('.dropdown__btn');
const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
const dropDownListItems = dropDownList.querySelectorAll('.dropdown__item');
const dropdownSelect = document.querySelector('.form__sity-select');
const dropdownText = dropDownWrapper.querySelector('.dropdown__text');


const initDropdown = () => {
  dropDownBtn.addEventListener('click', function (e) {
    dropDownList.classList.toggle('dropdown__list--visible');
    this.classList.add('dropdown__button--active');

    if (!dropDownList.classList.contains('dropdown__list--visible')) {
      dropDownBtn.classList.remove('dropdown__button--active');
    }
  });

  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdownText.innerText = this.innerText;
      dropdownSelect.value = this.dataset.value;
      dropDownList.classList.remove('dropdown__list--visible');

      const currentItem = e.target;

      dropDownListItems.forEach(function (item) {
        item.classList.remove('dropdown__item--active');
      });

      currentItem.classList.add('dropdown__item--active');
      dropDownBtn.classList.remove('dropdown__button--active');
    });
  });

  document.addEventListener('click', function (e) {
    if (e.target !== dropDownBtn) {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });
};

export {initDropdown};

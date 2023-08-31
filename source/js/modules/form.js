import Pristine from 'pristinejs';
import {getLimitationsRegEx} from './form-validate/regular-expression';

const formNode = document.querySelector('.form__content form');
const selectNode = document.querySelector('.dropdown__text');
const modalFormNode = document.querySelector('.modal__content form');
const modalSelectNode = document.querySelector('.dropdown-modal__text');

const formValidate = () => {
  const pristine = new Pristine(formNode, {
    classTo: 'field',
    errorClass: 'is-invalid',
  });

  const inputName = formNode.querySelector('#name');

  pristine.addValidator(inputName, function (value) {
    if (!getLimitationsRegEx('name').test(value)) {
      return true;
    }
    return false;
  }, 'В имени не может быть цифр', 2, false);

  formNode.addEventListener('submit', function (e) {
    e.preventDefault();
    const valid = pristine.validate();
    if (valid) {
      selectNode.innerHTML = '';
      formNode.reset();
    }
  });
};

const popupFormValidate = () => {
  const pristine = new Pristine(modalFormNode, {
    classTo: 'field',
    errorClass: 'is-invalid',
  });

  const inputName = modalFormNode.querySelector('#name-modal');

  pristine.addValidator(inputName, function (value) {
    if (!getLimitationsRegEx('name').test(value)) {
      return true;
    }
    return false;
  }, 'В имени не может быть цифр', 2, false);

  const modalSelectInputNode = modalFormNode.querySelector('#sity');

  pristine.addValidator(modalSelectInputNode, function () {
    if (modalSelectInputNode.value !== '') {
      return true;
    }
    return false;
  }, 'В имени не может быть цифр', 2, false);

  modalFormNode.addEventListener('submit', function (e) {
    e.preventDefault();
    const valid = pristine.validate();
    if (valid) {
      modalSelectNode.innerHTML = '';
      modalFormNode.reset();
    }
  });
};

export {formValidate, popupFormValidate};

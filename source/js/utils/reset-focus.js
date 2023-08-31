const links = document.querySelectorAll('a');
const buttons = document.querySelectorAll('button');


const resetFocus = () => {
  links.forEach((link) => {
    link.addEventListener('mousemove', () => {
      link.blur();
    });
  });

  buttons.forEach((button) => {
    if (!button.classList.contains('dropdown__btn')) {
      button.addEventListener('mousemove', () => {
        button.blur();
      });
    }
  });
};

export {resetFocus};

const button = document.querySelector('.icon__left');
const menu = document.querySelector('.main__body');
const close = document.querySelector('.menu__header button');
const overlay = document.querySelector('.menu__overlay');

function showMenu() {
  button.setAttribute('hidden', '');
  menu.removeAttribute('hidden');
  overlay.removeAttribute('hidden');
};

function hideMenu() {
  menu.setAttribute('hidden', '');
  overlay.setAttribute('hidden', '');
  button.removeAttribute('hidden');
};

button.addEventListener('click', showMenu);
close.addEventListener('click', hideMenu);
overlay.addEventListener('click', hideMenu);

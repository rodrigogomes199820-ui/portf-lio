const btn = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu ul');

btn.addEventListener('click', () => {
  menu.classList.toggle('ativo');
});

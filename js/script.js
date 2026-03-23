const btn = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu ul');

btn.addEventListener('click', () => {
  menu.classList.toggle('ativo');
});


const p = document.querySelectorAll('.paragrafo p');

window.addEventListener('scroll', () => {
  p.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add('ativo');
    }
  });
});


window.dispatchEvent(new Event('scroll'));
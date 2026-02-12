const imagens = document.querySelector('.imagens');
const imgs = document.querySelectorAll('.imagens img');

const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');

let index = 0;
const largura = 800; // mesma largura definida no CSS

btnNext.addEventListener('click', () => {
    index++;
    if (index >= imgs.length) {
        index = 0;
    }
    atualizar();
});

btnPrev.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = imgs.length - 1;
    }
    atualizar();
});

function atualizar() {
    imagens.style.transform = `translateX(${-index * largura}px)`;
}
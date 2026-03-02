
/*Menu mobile */

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})





/*JS para funcionar os botões das fotos*/
const carrosel = document.querySelector('.carrosel');
const figura = document.querySelector('.fig1');
const imagens = document.querySelectorAll('.ft1');
const btnEsquerda = document.querySelector('.esquerda');
const btnDireita = document.querySelector('.direita');
let index = 0;
const maxMovimentos = 4;
function atualizarCarrosel() {
    const largura = carrosel.clientWidth;
    figura.style.transform = `translateX(-${index * largura}px)`;
}
btnDireita.addEventListener('click', () => {
    if (index < maxMovimentos) {
        index++;
        atualizarCarrosel();
    }
});
btnEsquerda.addEventListener('click', () => {
    if (index > 0) {
        index--;
        atualizarCarrosel();
    }
});
let header = document.querySelector('header');
let firstImg = document.querySelector('img');
let styleHeader = getComputedStyle(header);
let styleFirstImg = getComputedStyle(firstImg);
header.style.height = styleFirstImg.height;
let body = document.querySelector('body');
window.addEventListener('resize', e => {
    header.style.height = styleFirstImg.height;
})
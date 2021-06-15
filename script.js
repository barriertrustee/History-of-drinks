let header = document.querySelector('header');
let firstImg = document.querySelector('img');
let styleHeader = getComputedStyle(header);
let styleFirstImg = getComputedStyle(firstImg);
header.style.height = styleFirstImg.height;
let moon = document.getElementById('moon');
let right = document.getElementById('right');
let left = document.getElementById('left');
let text = document.getElementById('text');

window.addEventListener("scroll", ()=>{
    let value = window.scrollY;
    text.style.marginTop = value*1+'px';
    moon.style.marginTop = value*1.5+'px';
    left.style.left = value*-1+'px';
    right.style.left = value*1+'px';
})
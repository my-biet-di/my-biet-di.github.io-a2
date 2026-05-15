let text = document.getElementById('text');
let back = document.getElementById('back');
let mid = document.getElementById('mid');
let front = document.getElementById('front');

window.addEventListener('scroll', () => {
    let value = window.scrollY
    text.style.marginTop = value * 1.5 + 'px';
})
let text = document.getElementById('text');

//Initially, I wanted the text to disappear behind the grassy hill when scrolled down, but I encountered some problems with it scrolling endlessly.
//So I decided to have the text move upwards when scrolling.

window.addEventListener('scroll', () => {
    let value = window.scrollY
    text.style.marginTop = value * -1.5 + 'px';
})

// gets button and makes it button
const styleButton = document.getElementById('style-change');

styleButton.addEventListener('click', () => {
    changeStyle();
});

function changeStyle(){
    let style = document.getElementById('style');

    if(style.getAttribute('href') == 'styleone.css') {
        style.setAttribute('href', 'styletwo.css');
        localStorage.setItem('style-mem', 'styletwo.css');
    } else{
       style.setAttribute('href', 'styleone.css');
       localStorage.setItem('style-mem', 'styleone.css');
    }
}

// make it so if you refresh/close tab style is saved
// if the page has been loaded before put current style as the correct one
function styleRemember(){
    const currentStyle = localStorage.getItem('style-mem');

    if(currentStyle){
        document.getElementById('style').setAttribute('href', currentStyle);
    }
}

window.onload = styleRemember();
const mytext = document.getElementById('my-text');
const fontTen = document.getElementById('font10')
const fontTwenty = document.getElementById('font20')
const fontThirty = document.getElementById('font30')
const fontForty = document.getElementById('font40')

function changeSize(x) {
    function changeFont() {
        mytext.style.fontSize = `${x}px`;
    };
    return changeFont;
}

const font10 = changeSize(10);
const font20 = changeSize(20);
const font30 = changeSize(30);
const font40 = changeSize(40);


fontTen.addEventListener('click', font10);
fontTwenty.addEventListener('click', font20);
fontThirty.addEventListener('click', font30);
fontForty.addEventListener('click', font40);
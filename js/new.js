let buttonBlock = document.getElementsByClassName('news__icon');
let titleBlock = document.getElementsByClassName('news__title');

for (let i=0; i<buttonBlock.length; i++) {
    buttonBlock[i].addEventListener('click', function(e) {
        setPositionForBlock(e.target);   
    });
}
for (let i=0; i<titleBlock.length; i++) {
    titleBlock[i].addEventListener('click', function(e) {
        setPositionForBlock(e.target);   
    });
}
function setPositionForBlock(elem) {
    let blockStatus = 1;
    let bpSize = (screen.availWidth >= 320 && screen.availWidth <= 429) ? 0 : 60;          
    let selectedBlock = elem.parentNode.parentNode.parentNode;
    let isOpen = elem.parentNode.parentNode.getElementsByClassName('news__answer')[0];
    if(isOpen.classList.contains('open')){
        blockStatus *= (-1);
        if (bpSize == 0) {
            selectedBlock.style.display = 'flex';
            elem.style.marginTop = '0px';
            elem.parentNode.getElementsByClassName('news__title')[0].removeAttribute('style');
        }
    } else {
        if (bpSize == 0) {
            selectedBlock.style.display = 'block';
            elem.style.marginTop = '-120px';
            elem.parentNode.getElementsByClassName('news__title')[0].style.width = '282px';
        }
    }
    let w = selectedBlock.querySelector('.news__img').width;
    let h = selectedBlock.querySelector('.news__img').height;
    selectedBlock.querySelector('.news__img').style.width = w + (bpSize * blockStatus) + 'px';
    selectedBlock.querySelector('.news__img').style.height = h + (bpSize * blockStatus) + 'px';
}
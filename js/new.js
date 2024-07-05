<script>
    let openBlock = document.getElementsByClassName('news__inner');
    for (let i=0; i<openBlock.length; i++) {
        openBlock[i].addEventListener('click', function(e) {
            let blockStatus = 1;
            let bpSize = (screen.availWidth >= 320 && screen.availWidth <= 429) ? 0 : 60;          
            let selectedBlock = this.parentNode.parentNode.parentNode;
            let isOpen = this.parentNode.parentNode.getElementsByClassName('news__answer')[0];
            if(isOpen.classList.contains('open')){
                blockStatus *= (-1);
                if (bpSize == 0) {
                    selectedBlock.style.display = 'flex';
                    this.style.marginTop = '0px';
                    this.parentNode.getElementsByClassName('news__title')[0].removeAttribute('style');
                }
            } else {
                if (bpSize == 0) {
                    selectedBlock.style.display = 'block';
                    this.style.marginTop = '-120px';
                    this.parentNode.getElementsByClassName('news__title')[0].style.width = '282px';
                }
            }
            let w = selectedBlock.querySelector('.news__img').width;
            let h = selectedBlock.querySelector('.news__img').height;
            selectedBlock.querySelector('.news__img').style.width = w + (bpSize * blockStatus) + 'px';
            selectedBlock.querySelector('.news__img').style.height = h + (bpSize * blockStatus) + 'px';          
        });
    }
</script>
$(document).ready(function() {
    $('.news__inner').on('click', function() {
       let newsAnswer = $(this).parent().find('.news__answer');
       let mainBlock = $(this).parent().parent().find('.news__thumb');
       let bpSize = (screen.availWidth >= 320 && screen.availWidth <= 429) ? true : false;  
       let newsImg = $(this).parent().parent().find('.news__img');       
       if (newsAnswer.hasClass('open')) {          
           newsAnswer.removeClass('open');
           if (!bpSize) {
            newsImg.css('width', 120 + 'px');
            newsImg.css('height', 120 + 'px');
           }
           if (bpSize) {
            mainBlock.css('display', 'block');
            $(this).find('.news__circ').css('margin-top', '0px');
            $(this).find('.news__title').css({'margin-top': '0px', 'width': '170px','margin-left': '55px'});
           }           
       } else {
           newsAnswer.addClass('open');
           if (!bpSize) {
            newsImg.css('width', 180 + 'px');
            newsImg.css('height', 180 + 'px');
           }
           if (bpSize) {
            mainBlock.css({'display': 'flex','width': screen.availWidth + 'px', 'margin-left': '-55px'});
            $(this).find('.news__circ').css('margin-top', '-46px');
            $(this).find('.news__title').css({'margin-top': '65px', 'width': '90%','margin-left': '-10px'});
           }
       }
    });

    $('a.news__link.link').on('click', function(e) {
        e.preventDefault();
        $('li.news__item').each(function(){
            if($(this).css('display') == 'none') {
                $(this).removeAttr('style');
            }
        });
    });
});

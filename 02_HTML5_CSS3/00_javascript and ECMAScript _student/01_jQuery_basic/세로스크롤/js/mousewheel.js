$(function(){
    let wheelDelta=0; //휠 이벤트 발생시 반환값 확인 변수
    let browser=0;//파이어폭스 브라우저 판별 변수

    //browser[event-mousewheel] : 크롬, 익스, 사파리, 오페라...
    //browser[event-DOMMouseScroll] : 파이어폭스
    //파이어폭스 브라우저 판별 =>window.navigator.userAgent
    $('.section').each(function(index){
        $(this).on('mousewheel DOMMouseScroll', function(event){
            event.preventDefault();
            browser=window.navigator.userAgent.toLowerCase().indexOf('firefox');
            if(browser>=0){
                wheelDelta=-event.detail*40;
            }else{
                wheelDelta=event.originalEvent.wheelDelta;
            }
            //console.log(wheelDelta);

            if(wheelDelta<0){//-120 or -150 값을 가지면 다음 섹션으로 이동
                if(index < $('.section').length -1){
                    $('html, body').stop().animate({scrollTop:$(this).next().offset().top},500);
                }
            }else{ //위로 섹션으로 이동
                if(index>0){
                    $('html, body').stop().animate({scrollTop:$(this).prev().offset().top},500);
                }
            }
        });
    });

});
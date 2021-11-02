$(function(){

    // 메뉴
    $('.menu>ul>li').hover(function(){
        $(this).find('ul').stop().slideDown(1000);
    },function(){
        $(this).find('ul').stop().slideUp(1000);
    });

    //슬라이드
    let current=0; //초가값 변수 설정

    function mainSlide(){  //이미지 슬라이드 함수
        $('.slide').css({zIndex:1,opacity:1}); //모든 슬라이드 공통 초기화
        $('.slide').eq(current).css({zIndex:2}); //다음 슬라이드
        $('.slide').eq(current==0 ? 2:current-1).css({zIndex:3}).stop().animate({opacity:0},1000);//현재 보이는 슬라이드 부드럽게 사라지게 하기위한 함수
    }
    function nextCount(){
        current++;
        if(current>2){current=0}
        mainSlide();
    }

    //자동타이머
    setInterval(nextCount,3000);

    // 공지사항/갤러리 탭메뉴
    $('.notice-btn').click(function(){
        $('.notice-w').stop().show();
        $('.gallery').stop().hide();
        $('.notice-btn').removeClass('addbtn');
        $('.gallery-btn').removeClass('addbtn');
    });
    $('.gallery-btn').click(function(){
        $('.notice-w').stop().hide();
        $('.gallery').stop().show();
        $('.notice-btn').addClass('addbtn');
        $('.gallery-btn').addClass('addbtn');
    });

    //팝업
    $('.popup-btn').click(function(){
        $('.popup-wrap').fadeIn(300);
    });
    $('.close-btn').click(function(){
        $('.popup-wrap').fadeOut(300);
    });
});


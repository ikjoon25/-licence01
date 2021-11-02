//메뉴

var t=winW=vidW=0;

$('.appbarBt').on({click:function(){
        $('.header-menu-bar').stop().animate({left:100+'%'},500)
        $('.mobile-modal-menu').stop().animate({left: 0},500);
    }

});

$('.appbarCloseBt').on({click:function(){
    $('.header-menu-bar').stop().animate({left:0+'%'},500)
    $('.mobile-modal-menu').stop().animate({left:'-100%'},500);
}

});
$(window).resize(function(){
    windowResizeFn();
});

function windowResizeFn(){
    if($(window).innerWidth() >1090){
        if(t==0){
            $('.appbarCloseBt').trigger('click');
            t=1;
        }
    }else{
        t=0;
    }
}
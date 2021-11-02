$('.quick_icon>li').hover(function(){
    var num=$(this).index() + 1;
    $(this).find('>a>img').attr({'src':'image/quick_on_0' + num + '.png'});
},function(){
    var num=$(this).index() + 1;
    $(this).find('>a>img').attr({'src':'image/quick_0' + num + '.png'});
});

var trues=true;

$('.quick_toggle').on('click', function(){
    if(trues){
        $(this).addClass('quick_open')
        $(this).stop().animate({right:0},500);
        $('.quickmenu').stop().animate({right:'-70px'},500, function(){
            trues=false;
        });
    }else{
        $(this).removeClass('quick_open')
        $(this).stop().animate({right:'70px'},500);
        $('.quickmenu').stop().animate({right:0},500, function(){
            trues=true;
        }); 
    }
});
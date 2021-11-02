const box=$('#stories .container .contents');
const prev=$('.cotent-btn .prev');
const next=$('.cotent-btn .next');
let col1=0,
    col2=1,
    col3=2,
    col4=3,
    timer;


timer=setInterval(events,2500);

    function events(){
        box.eq(col1).stop().css({transform:'scale(' + .9+')' ,'z-index' : 0}).animate({left:'10%', top:50 , opacity:.5, marginLeft:0},1000);
        box.eq(col2).stop().css({transform:'scale(' + .8+')' ,'z-index' : 0}).animate({left:'50%', top:10 , opacity:.1, marginLeft:'-11%'},1000);
        box.eq(col3).stop().css({transform:'scale(' + .9+')' ,'z-index' : 0}).animate({left:'68%', top:50 , opacity:.5, marginLeft:0},1000);
        box.eq(col4).stop().css({transform:'scale(' + .9+')' ,'z-index' : 0}).animate({left:'50%', top:100 , opacity:1, marginLeft:'-11%'},1000);
        col1--;
        col2--;
        col3--;
        col4--;

        if(col1<0) col1=3;
        if(col2<0) col2=3;
        if(col3<0) col3=3;
        if(col4<0) col4=3;
}
$('#stories').hover(function(){
    clearInterval(timer);
},function(){
    timer=setInterval(events,2500);
});
box.hover(function(){
    $(this).css('background','#d9ede0');
},function(){
    $(this).css('background','#fff');
});

next.on('click',function(){
    box.eq(col1).stop().css({transform:'scale(' + .9+')' ,'z-index' : 0}).animate({left:'10%', top:50 , opacity:.5, marginLeft:0},1000);
    box.eq(col2).stop().css({transform:'scale(' + .8+')' ,'z-index' : 0}).animate({left:'50%', top:10 , opacity:.1, marginLeft:'-11%'},1000);
    box.eq(col3).stop().css({transform:'scale(' + .9+')' ,'z-index' : 0}).animate({left:'68%', top:50 , opacity:.5, marginLeft:0},1000);
    box.eq(col4).stop().css({transform:'scale(' + .9+')' ,'z-index' : 0}).animate({left:'50%', top:100 , opacity:1, marginLeft:'-11%'},1000);
    col1--;
    col2--;
    col3--;
    col4--;

    if(col1<0) col1=3;
    if(col2<0) col2=3;
    if(col3<0) col3=3;
    if(col4<0) col4=3;
    return false;

});

prev.on('click',function(){
    box.eq(col3).stop().css({transform:'scale(' + .9+')' ,'z-index' : 0}).animate({left:'10%', top:50 , opacity:.5, marginLeft:0},1000);
    box.eq(col4).stop().css({transform:'scale(' + .8+')' ,'z-index' : 0}).animate({left:'50%', top:10 , opacity:.1, marginLeft:'-11%'},1000);
    box.eq(col1).stop().css({transform:'scale(' + .9+')' ,'z-index' : 0}).animate({left:'68%', top:50 , opacity:.5, marginLeft:0},1000);
    box.eq(col2).stop().css({transform:'scale(' + .9+')' ,'z-index' : 0}).animate({left:'50%', top:100 , opacity:1, marginLeft:'-11%'},1000);
    col1++;
    col2++;
    col3++;
    col4++;

    if(col1>3) col1=0;
    if(col2>3) col2=0;
    if(col3>3) col3=0;
    if(col4>3) col4=0;
    return false;

});


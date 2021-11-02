const menu=$('#nav > li');
menu.hover(function(){
    let tg=$(this);
    let onImg=tg.find('.text_img > .on');
    let offImg=tg.find('.text_img > .off');
    let menuImage=tg.find('.menu_image');
    let imageHeight=menuImage.find('img').innerHeight();

    onImg.css('display','block');
    offImg.css('display','none');
    menuImage.stop().animate({height:imageHeight},600)
},function(){
    let tg=$(this);
    let onImg=tg.find('.text_img > .on');
    let offImg=tg.find('.text_img > .off');
    let menuImage=tg.find('.menu_image');
    let imageHeight=0;

    onImg.css('display','none');
    offImg.css('display','block');
    menuImage.stop().animate({height:imageHeight},600)
});
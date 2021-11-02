const menu=$('#nav > li');
menu.hover(function(){
    let tg=$(this);
    let onImg=tg.find('.text_img > .on');
    let offImg=tg.find('.text_img > .off');
    let menuImage=tg.find('.menu_image');
    let imageWidth=menuImage.find('img').innerWidth();

    onImg.css('display','block');
    offImg.css('display','none');
    menuImage.stop().animate({width:imageWidth},600)
},function(){
    let tg=$(this);
    let onImg=tg.find('.text_img > .on');
    let offImg=tg.find('.text_img > .off');
    let menuImage=tg.find('.menu_image');
    let imageWidth=0;

    onImg.css('display','none');
    offImg.css('display','block');
    menuImage.stop().animate({width:imageWidth},600)
});
$('.rollover').each(function(){
    var a=$(this);
    var img=a.find('img');
    var src_off=img.attr('src');
    var src_on=src_off.replace('_off','_on');

    a.on('mouseenter', function(){
        img.attr('src',src_on)
    });
    a.on('mouseleave', function(){
        img.attr('src',src_off)
    });
});
var balloon=$('<div class="balloon"></div>').appendTo('body');
function updateBalloonPosition(x, y){
    balloon.css({left: x+15, top:y})
}

$('.showBalloon').each(function(){
    var element=$(this);
    var text=element.attr('title');
    element.attr('title','');
    element.hover(function(e){
        balloon.text(text);
        updateBalloonPosition(e.pageX, e.pageY);
        balloon.show();
    },function(){
        balloon.hide();
    });
    element.mousemove(function(e){
        updateBalloonPosition(e.pageX, e.pageY);
    });


});
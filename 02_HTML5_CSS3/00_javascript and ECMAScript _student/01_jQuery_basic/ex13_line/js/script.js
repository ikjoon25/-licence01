const topLine=$('.top_line');
const bottomLine=$('.bottom_line');
const leftLine=$('.left_line');
const rightLine=$('.right_line');


function line(){
    setInterval(function(){
        topLine.css('left','-100%').animate({left:0},500)
        bottomLine.css('left','100%').animate({left:0},500)
        leftLine.css('top','100%').animate({top:0},500)
        rightLine.css('top','-100%').animate({top:0},500)
    },2000);
}

line();
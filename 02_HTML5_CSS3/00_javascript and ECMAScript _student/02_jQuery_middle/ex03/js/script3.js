/* var current=0;
var banner1=$('#wrapper1 li');

setInterval(function(){
    var prev=banner1.eq(current);
    move(prev,0,'-100%')
    current++;
    if(current==banner1.size()){current=0}
    var next=banner1.eq(current);
    move(next,'100%',0);
},1000);

function move(tg,start,end){
    tg.css('top',start).stop().animate({top: end},500);
} */

var current=0;
var banner1=$('#wrapper1 li');

setInterval(function(){
    var prev=banner1.eq(current);
    move(prev,0,'-100%')
    current++;
    if(current==banner1.size()){current=0}
    var next=banner1.eq(current);
    move(next,'100%',0);
},1000);

function move(tg,start,end){
    tg.css('top',start).stop().animate({top: end},500);
}

//두번째슬라이드
var current2=0;
var banner2=$('#wrapper2 li');

setInterval(function(){
    var prev=banner2.eq(current2);
    move(prev,0,'100%')//0에서 100으로 내려가
    current2++;//증가하면서 내려와
    if(current2==banner2.size()){current2=0}//커랜트와 베너가 3이되면 다시 0으로 만들어
    var next=banner2.eq(current2);
    move(next,'-100%',0);//다음꺼 내려오게 -100% 만들어
},1000);

//세번째슬라이드

function moveLeft(tg,start,end){
    tg.css('left',start).stop().animate({left: end},500);
}

var current3=0;
var banner3=$('#wrapper3 li');

setInterval(function(){
    var prev=banner3.eq(current3);
    current3++;
    moveLeft(prev,0,'100%');
    if(current3==banner3.size()){current3=0}
    var next=banner3.eq(current3);
    moveLeft(next,'-100%',0);

},1000);

//네번째슬라이드
function moveRight(tg,start,end){
    tg.css('right',start).stop().animate({right: end},500);
}

var current4=0;
var banner4=$('#wrapper4 li');

setInterval(function(){
    var prev=banner4.eq(current4);
    current4++;
    moveRight(prev,0,'100%');
    if(current4==banner4.size()){current4=0}
    var next=banner4.eq(current4);
    moveRight(next,'-100%',0);

},1000);
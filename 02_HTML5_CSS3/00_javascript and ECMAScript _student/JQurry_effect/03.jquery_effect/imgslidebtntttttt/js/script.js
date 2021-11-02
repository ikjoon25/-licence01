const banner=$('.slideUl>li');
const button=$('.buttonList>li');
const prevBtn=$('.arrowBtn>.prev');
const nextBtn=$('.arrowBtn>.next');
let current=0;
let setIntervalId;

timer();
function timer(){
    setIntervalId=setInterval(() => {
        let prev=banner.eq(current);
        let prevBt=button.eq(current);
        current++;
        move(prev, 0, '-100%');
        prevBt.removeClass('on');
        if(current==banner.size()){
            current=0
        }
        let next=banner.eq(current);
        let nextBt=button.eq(current);
        move(next, '100%', 0);
        nextBt.addClass('on');
    }, 2000);
}

function move(tg, start, end){
    tg.css('left',start).stop().animate({left:end},500);
}
$('.slide').on({mouseover:function(){
    clearInterval(setIntervalId)
},mouseout:function(){
    timer();
}});

nextBtn.on('click', function(){
    let prev=banner.eq(current);
    let prevBt=button.eq(current);
    current++;
    move(prev, 0, '-100%');
    prevBt.removeClass('on');
    if(current==banner.size()){
        current=0
    }
    let next=banner.eq(current);
    let nextBt=button.eq(current);
    move(next, '100%', 0);
    nextBt.addClass('on');
});

prevBtn.on('click', function(){
    let prev=banner.eq(current);
    let prevBt=button.eq(current);
    current--;
    move(prev, 0, '100%');
    prevBt.removeClass('on');
    if(current==-banner.size()){
        current=0
    }
    let next=banner.eq(current);
    let nextBt=button.eq(current);
    move(next, '-100%', 0);
    nextBt.addClass('on');
});

function nextMove(i){
    if(current==i) return;
    let currentEl=banner.eq(current);
    let nextEl=banner.eq(i);
    currentEl.css('left',0).stop().animate({left:'-100%'},500)
    nextEl.css('left','100%').stop().animate({left:0},500);
    current=i;
}
function prevMove(i){
    if(current==i) return;
    let currentEl=banner.eq(current);
    let nextEl=banner.eq(i);
    currentEl.css('left',0).stop().animate({left:'100%'},500)
    nextEl.css('left','-100%').stop().animate({left:0},500);
    current=i;
}
button.on('click', function(){
    let tg=$(this);
    let i=tg.index();

    button.removeClass('on');
    tg.addClass('on');
    if(current<i){
        nextMove(i)
    }else{
        prevMove(i)
    }
});
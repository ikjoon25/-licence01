const tab=$('#tab > li');
const content=$('.content>div');

/* tab.on('click',function(){}); */
tab.on({click:function(e){
    let tg=$(this);
    let tc=tg.find('a');
    tab.find('a').removeClass('on');
    tc.addClass('on');
    let i=tg.index();
    /* console.log(i) */
    content.css('display','none');
    content.eq(i).css('display','block')
    }
});

const el=$('.content>div>img');
let urls=['http://www.naver.com','http://www.daum.net','http://www.google.com','http://www.nate.com'];

el.on({mouseover:function(){
    let tg=$(this);
    tg.addClass('on')
},mouseout:function(){
    let tg=$(this);
    tg.removeClass('on')
},click:function(){
    let tg=$(this);
    let i=tg.parent().index();
    let linkURL=urls[i];
    /* location.href=linkURL; */
    window.open(linkURL)
}
});
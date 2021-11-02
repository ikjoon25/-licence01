$('.opa>div').css('opacity',0);
$('.cross').on({mouseover:function(){
	let th=$(this);
	let x1=th.find('.hover_x1');
	let x2=th.find('.hover_x2');
	let x3=th.find('.hover_x3');
	let x4=th.find('.hover_x4');
	x1.css('opacity',1).stop().animate({height:0},500);
	x2.css('opacity',1).stop().animate({height:0},500);
	x3.css('opacity',1).stop().animate({width:0},500);
	x4.css('opacity',1).stop().animate({width:0},500);
},mouseout:function(){
	let th=$(this);
	let x1=th.find('.hover_x1');
	let x2=th.find('.hover_x2');
	let x3=th.find('.hover_x3');
	let x4=th.find('.hover_x4');
	x1.stop().animate({height:'50%',opacity:0},500);
	x2.stop().animate({height:'50%',opacity:0},500);
	x3.stop().animate({width:'50%',opacity:0},500);
	x4.stop().animate({width:'50%',opacity:0},500);
}});
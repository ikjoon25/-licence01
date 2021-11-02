$(function(){
    const $window=$(window);
    const header=$('.page-header');
    let headerOffsetTop=header.offset().top;
   // console.log(headerOffsetTop)

   $window.scroll(function(){
       if($(this).scrollTop() >= 70){
            header.addClass('sticky');
       }else{
            header.removeClass('sticky');
       }
   });
});
$(function(){
    let header=$('.page-header');
    let headerClone=header.contents().clone();
    let headerCloneContainer=$('<div class="page-header-clone"></div>');
    let headerHeight=header.offset().top + header.outerHeight();
    //console.log(headerHeight)
    headerCloneContainer.append(headerClone);
    headerCloneContainer.appendTo('body');

    $(window).scroll(function(){
        if($(this).scrollTop() >=headerHeight ){
            headerCloneContainer.addClass('visible')
        }else{
            headerCloneContainer.removeClass('visible')
        }
    });
});
let $window=$(window),
    $mainHeader=$('#main-header'),
    $logo=$('#logo'),
    $defaultLogo='img/b.png',
    $smallLogo='img/bb.png',
    $rHeader=$mainHeader.outerHeight();
    //console.log( $rHeader);
$window.scroll(function(){
    if($(this).scrollTop()> $rHeader){
        if(!$mainHeader.hasClass('addHeader')){
            $mainHeader.addClass('addHeader');
            switchImg($smallLogo)
        }
    }else{
        if($mainHeader.hasClass('addHeader')){
            $mainHeader.removeClass('addHeader')
            switchImg($defaultLogo)
        }
    }
});

function switchImg(newImg) {
    $logo.fadeOut(300, function(){
        $logo.attr('src', newImg);
        $logo.fadeIn(300);
    });
}
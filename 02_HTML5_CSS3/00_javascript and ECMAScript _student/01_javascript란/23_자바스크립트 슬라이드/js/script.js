document.addEventListener('DOMContentLoaded', function(){
    // 변수 지정
    var slideWrap=document.querySelector('.container'), //전체 감싸는
        slideContainer=document.querySelector('.slider-container'), //ul
        slide=document.querySelectorAll('.slide'),//li
        prevBtn=document.getElementById('prev'),//왼쪽 화살표
        nextBtn=document.getElementById('next'),//오른쪽 화살표
        pager=document.querySelector('.pager'), //블릿기호 감싸는
        pagerBtn=document.querySelectorAll('.pager span'), //동그라미
        slideHeight=0, // li들의 가장 높은값을 설정하기위한 변수
        currentIndex=0, // 움직이기 위한 현재 인덱스 값
        slideCount=slide.length,
        timer=undefined; // 반복적인 것을 제어하기위한 변수
    
    //슬라이드의 높이 확인할려면 - 대상.offsetHeight
    for(var i=0; i <slideCount; i++){
        if(slideHeight < slide[i].offsetHeight){
            slideHeight=slide[i].offsetHeight;
        }
    }
    //console.log(slideHeight);
    slideWrap.style.height=slideHeight + 'px';
    slideContainer.style.height=slideHeight + 'px';

    //슬라이드 가로 배치
    for(var a=0; a<slideCount; a++){   //a가 슬라이드카운터보다 작으면 실행 후 증가해 
        slide[a].style.left=a *100 + '%';
    }

    //슬라이드 이동 함수
    function goToSlider(idx){
        slideContainer.classList.add('animated');
        slideContainer.style.left=-100*idx+'%';
        currentIndex = idx;
        for(var y=0; y<pagerBtn.length; y++){
            pagerBtn[y].classList.remove('active')
        }
        pagerBtn[idx].classList.add('active');
    }
    goToSlider(0);

    //자동슬라이드
    function startAutoSlide(){
        timer=setInterval(function(){
            var nextIdx=(currentIndex +1) % slideCount;
            goToSlider(nextIdx);
        },3000);
    }
    function stopAutoSlide(){
        clearInterval(timer)
    }
    startAutoSlide();

    slideWrap.addEventListener('mouseenter', function(){
        stopAutoSlide();
    });
    slideWrap.addEventListener('mouseleave', function(){
        startAutoSlide();
    });

    nextBtn.addEventListener('click',function(){
        goToSlider(currentIndex+1);
        
    });
    prevBtn.addEventListener('click',function(){
        
        if(currentIndex==slideCount-1){
            goToSlider(0);
        }else{
            goToSlider(currentIndex+1);
        }
    });
    prevBtn.addEventListener('click',function(){
                
        if(currentIndex==0){
            goToSlider(slideCount-1);
        }else{
            goToSlider(currentIndex-1);
        }
    });

    /* pager btn */
    for(var x=0; x<pagerBtn.length; x++){
        pagerBtn[x].addEventListener('click',function(event){
/*             console.log(event.target); */
            var pagerNum=event.target.innerText - 1;
            goToSlider(pagerNum);
        });
    }
});
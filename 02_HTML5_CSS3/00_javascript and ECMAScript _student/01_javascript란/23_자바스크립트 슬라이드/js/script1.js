(function(){
    const   slideList=document.querySelector('.slide-list'),
            slideContents=document.querySelectorAll('.slide-content'),
            slideBtnNext=document.querySelector('.slide-btn-next'),
            slideBtnPrev=document.querySelector('.slide-btn-prev'),
            pagination=document.querySelector('.slide-pagination'),
            slideLen=slideContents.length,
            slideWidth=400,
            slideSpeed=300,
            startNum=0;
    
        slideList.style.width=slideWidth * (slideLen +2) +'px';

        let firstChild=slideList.firstElementChild;
        let lastChild=slideList.lastElementChild;
        let cloneFirst=firstChild.cloneNode(true);
        let cloneLast=lastChild.cloneNode(true);

        slideList.appendChild(cloneFirst);
        slideList.insertBefore(cloneLast, slideList.firstElementChild);

        //pagination
        let pageChild='';
        for(var i=0; i<slideLen; i++){
            pageChild += '<li class="dot';
            pageChild += (i===startNum) ? ' dot_active' : '';
            pageChild +='" data-index="' + i + '"><a href="#"></a></li>';
        }

        pagination.innerHTML = pageChild;
        const pageDots=document.querySelectorAll('.dot');

        slideList.style.transform = "translate3d(-" + (slideWidth * (startNum + 1)) + "px, 0px, 0px)";
        let curIndex=0;
        let curSlide=slideContents[curIndex];
       // curSlide.classList.add('slide_active');

        // nextBtn
        slideBtnNext.addEventListener('click', function(){
            if(curIndex <= slideLen -1){
                slideList.style.transition= slideSpeed +"ms";
                slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 2)) + "px, 0px, 0px)";
            }
            if (curIndex === slideLen - 1) {
                setTimeout(function() {
                  slideList.style.transition = "0ms";
                  slideList.style.transform = "translate3d(-" + slideWidth + "px, 0px, 0px)";
                }, slideSpeed);
                curIndex = -1;
              }
             // curSlide.classList.remove('slide_active');
              pageDots[(curIndex === -1) ? slideLen - 1 : curIndex].classList.remove('dot_active');
              curSlide = slideContents[++curIndex];
              //curSlide.classList.add('slide_active');
              pageDots[curIndex].classList.add('dot_active');
        });
        slideBtnPrev.addEventListener('click', function() {
            if (curIndex >= 0) {
              slideList.style.transition = slideSpeed + "ms";
              slideList.style.transform = "translate3d(-" + (slideWidth * curIndex) + "px, 0px, 0px)";
            }
             if (curIndex === 0) {
              setTimeout(function() {
                slideList.style.transition = "0ms";
                slideList.style.transform = "translate3d(-" + (slideWidth * slideLen) + "px, 0px, 0px)";
              }, slideSpeed);
              curIndex = slideLen;
            }
           //curSlide.classList.remove('slide_active');
            pageDots[(curIndex === slideLen) ? 0 : curIndex].classList.remove('dot_active');
            curSlide = slideContents[--curIndex];
            //curSlide.classList.add('slide_active');
            pageDots[curIndex].classList.add('dot_active');
          });

        let curDot;
        Array.prototype.forEach.call(pageDots, function (dot, i) {
        dot.addEventListener('click', function (e) {
            e.preventDefault();
            curDot = document.querySelector('.dot_active');
            curDot.classList.remove('dot_active');
          
            curDot = this;
            this.classList.add('dot_active');

            curSlide.classList.remove('slide_active');
            curIndex = Number(this.getAttribute('data-index'));
         // curSlide = slideContents[curIndex];
         // curSlide.classList.add('slide_active');
            slideList.style.transition = slideSpeed + "ms";
            slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 1)) + "px, 0px, 0px)";
        });
    });
})();
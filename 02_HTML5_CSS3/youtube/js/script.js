const moreBtn=document.querySelector('.info .moreBtn');
const title=document.querySelector('info .metadata .title');

moreBtn.addEventListener('click',function(){
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('addTitle');
});
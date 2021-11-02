var btnCollapse=document.getElementById('btn-collapse'),
    heading=document.getElementsByClassName('panel-heading'),
    question=document.getElementsByClassName('panel-question'),
    answer=document.getElementsByClassName('panel-body');

for(var i=0; i<heading.length; i++){
    heading[i].addEventListener('click', function(e){
        for(var k=0; k<question.length; k++){
            question[k].classList.remove('active')
            e.target.parentNode.classList.add('active');
            activeBody();
        }
    });
}

activeBody();
function activeBody(){
    for(var j=0; j<answer.length; j++){
        answer[j].style.display='none';
    }
    var activePanel=document.querySelector('.panel-question.active .panel-body');
    activePanel.style.display='block';

}
/* //while문

var i=1;
while(i<=10){
    console.log("안녕하세요" + i, "<br>")
    i++;
}

var j=1;
while(j<=30){
    if(j%2==0 && j%6==0){
        console.log(j)
    }
    j++ 
}

var k=20;
while(k>=10){
    if(k%2==0){
        document.write("<p class='blue'>"+k+"</p>")
    }else{
        document.write("<p class='red'>"+k+"</p>")
    }
    k--;
}

//do while문 블록을 먼저 실행하고 조건문 읽음
var t=10;
do{
    document.write("hello!!" + t);
    t--;
}while(t>3)

//for문
/* for(시작값,조건문,증감식){
    실행문
} */
/* 
for(var i=1; i<=10; i++){
    console.log(`for:${i}`)
}

for(var i=1; 1<=100; i++){
    if(i%5==0 && 1%7!=0){
        document.write("<p class='red'>"+i+"</p>");
    }else if(i%5 !=0 && 1%7==0){
        document.write("<p class='green'>"+i+"</p>");
    }else if(i%5 ==0 && 1%7==0){
        document.write("<p class='aqua'>"+i+"</p>");
    }
} */ 

//break문(반복문을 완전히 끝내는것),  continue(반복문에서 지금 사용한 부분만 스킵하고 다른것을 실행)

/* for(var i=1; 1<=10; i++){
    if(i==6) break;
    console.log(i);
} */

//중첩 for문
for(var i=1; i<=3; i++){
    for(var k=1; k<=2; k++){
        document.write(`${i} 행 ${k} 열`);
    }
    document.write("<br>")
}
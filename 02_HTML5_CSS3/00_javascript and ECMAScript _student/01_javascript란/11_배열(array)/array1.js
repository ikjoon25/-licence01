var t="hello javascript";
var str="webkmobilek2002";

document.write(`${t.charAt(4)}<br>`);
document.write(`${t.indexOf('j')}<br>`);
document.write(`${t.indexOf('a')}<br>`);
document.write(`${t.lastIndexOf('a')}<br>`);
document.write(`${t.match('join')}<br>`);
document.write(`${t.replace('hello','hi')}<br>`);
document.write(`${t.search('javascript')}<br>`);
document.write(`${t.slice(4,10)}<br>`);
document.write(`${t.substr(4,3)}<br>`);
document.write(`${t.substring(0,3)}<br>`);
document.write(`${str.split("k")}<br>`);
document.write(`${str.toLowerCase()}<br>`);
document.write(`${str.toUpperCase()}<br>`);
document.write(`${str.length}<br>`);
document.write(`${str.concat("web")}<br>`);
document.write(`${str.trim()}<br>`);

var j="Hello Thank you good luck to you";

var userName=prompt("당신의 영문 이름은?","");
var upperName=userName.toUpperCase();
document.write(upperName);

var userNum=prompt("당신의 연락처는?","");
var result=userNum.substring(0,userNum.length-4) + "****";
document.write(result);

var userEmail=prompt("당신의 이메일 주소는?","");
var arrUrl=[".co.kr",".com",".net",".or.kr",".go,kr"];
var check1=false;
var check2=false;
if(userEmail.indexOf("@") > 0){check1=true}
for(var i=0; i<arrUrl.length; i++){
    if(userEmail.indexOf(arrUrl[i])>0){
        check2=true;
    }
}
if(check1 && check2){
    document.write(userEmail);
}else{
    document.write("이메일형식이 아닙니다.")
}
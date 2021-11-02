/* //호이스팅 -밑에있는 것을 끌어 올리다
hoisted()
function hoisted(){
    console.log("foo");
}
notHoisted();//이름없는 함수는 불러낼수없다 
var notHoisted=function(){
    console.log('No');
}
console.log(notHoisted());

var x=function(y){
    return y * y;
}
console.log(x(5));//익명 함수 표현익명 함수

var z=function square(c){
    return c*c;
}
console.log(z(5));
 */
//즉시 실행함수
(function(){
    console.log("babo")
})();

(function square(x){
    console.log(x*x)
}(3));

(function (x){
    console.log(x*x);
})(2);


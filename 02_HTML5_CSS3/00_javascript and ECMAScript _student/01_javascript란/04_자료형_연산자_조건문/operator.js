//1 numberic operatiors(숫자연산자)
console.log(1+1);//add 더하는 연산자
console.log(6-2);//substract
console.log(2/2);//divide
console.log(5*3);//multply
console.log(3%2);//remainder
console.log(2**3)//exponentiation

//2. string concatenation(문자결합)
console.log('학교종이'+'땡땡떙');
const a="어서 모이자";//변수
const b="선생님이";
const c="우리를 기다리신다";
console.log(a+b+c)

//3. Assigment operatiors(대입연산)
let x=3;
let y=2;
x=y;
console.log(x)
x +=y;
console.log(x)
x -=y;
console.log(x)
x*=y;
console.log(x)
x/=y;
console.log(x)

let str="<table border='1'>";
str+="<tr>";
str+="<td>1</td><td>2</td><td>3</td>";
str+="</tr>";
str+="</table>";
document.write(str);

//4.increment and decrement operatiors(증감연산자)

let counter=5;

console.log(counter++);
console.log(counter)
console.log(--counter)
console.log(counter--)
console.log(counter)
//5.Comparison operators(비교연산)

console.log(10<5);
console.log(10<=6)
console.log(10>6)
console.log(10>=6)
console.log(10=="10")
console.log(10==="10")//데이타값까지 같니? false

//6.Logical operators : ||(or) &&(and)  !(not)
const value1=false;
const value2=4<2;
console.log(`or:${value1 || value2 || check()}`);
function check(){for(let i=0; i<10; i++){console.log("hello")}return true;} //or은 첫부분은 true면 결과값도 true다.
console.log(`and:${value1 && value2 && check()}`); //첫번째부터 false가 나오면 결과값은 false다
console.log(!value1);//!부정의 의미 반대값이라고 생각하셈

//7.Equality(같다)
const stringFive="5";
const numberFive=5;
console.log(stringFive===numberFive);
console.log(stringFive!==numberFive);

const ikjoon1={name:'ikjoon'}
const ikjoon2={name:'ikjoon'}
const ikjoon3=ikjoon1
console.log(ikjoon1==ikjoon2);
console.log(ikjoon1===ikjoon2);
console.log(ikjoon2==ikjoon3);
console.log(ikjoon1==ikjoon3);

console.log(0==false);
console.log(0===false); //데이터타입까지는 틀리다
console.log(''==false); 

//8. Ternary operators ?간단하게 출력할때 사용(삼항조건연산자)
const g=10;
const h=3;

let result=g<h ? "javascript":"hello"
console.log(result)

//-----------------------------
const userHeight=170;
const userWeight=55;
let normal_w=(userHeight-100)*0.9;
console.log(normal_w)


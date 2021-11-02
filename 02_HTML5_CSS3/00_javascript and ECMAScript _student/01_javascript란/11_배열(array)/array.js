//오브젝트(어떤 연관된 특징과 행동들을 묶어 놓은것!)
//자료구조{비슷한 타입들을 묶어 놓는 것을 말함/타입이 있을 경우 동일한 타입만 담을수 있다는 장점}
//use strict
'use strict';
var arr=new Array();
var arr1=["","",""];
const arr2=new Array();
const arr3=[1,2,3];

const fruits=["🍊","🍌","🍉","🥕"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);

//for
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

//for of 
for(let fruit of fruits){
    console.log(fruit)
}

//forEach
fruits.forEach(function(fruit, index, array){
    console.log(fruit, index, array);
});

console.clear()
const arr_1=["사당","교대","방배","강남"];
const arr_2=["신사","압구정","옥수"];

const result=arr_1.join("-");
console.log(result);

const result1=arr_1.concat(arr_2);
console.log(result1);

const result2=arr_1.slice(1,3)
console.log(result2);

const result3=arr_1.sort();
console.log(result3);

const result4=arr_1.reverse();
console.log(result4);

console.clear();

var greenArr=["교대","방배","강남"];
var yellowArr=["미금","정자","수서"];

greenArr.splice(2,1,"서초","역삼");
console.log(greenArr)

var data1=yellowArr.pop();
//console.log(data1)
var data2=yellowArr.shift();
//console.log(data2);
yellowArr.push(data2);
console.log(yellowArr)

yellowArr.unshift(data1);
console.log(yellowArr)
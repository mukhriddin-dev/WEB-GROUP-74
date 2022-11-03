"use strict";


// // const text="JavaScript";

// // // console.log("Programming language: "+5**4);
// // // console.log(`Programming language: ${5**4}`);



// // let i=0;

// // // sayHello()
// // // sayHello()
// // // sayHello()

// // function sayHello(text,text2){ 

// //  console.log(`${text} : ${text2}`);

// //   i++

// //    window.document.body.style.backgroundColor=`rgba(0,0,0,${i/10})`

// // }

// // sayHello("personal home page","PHP")

// // sayHello("JavaScript object notion","JSON")





// // const getData=function(notif){ 
// //    console.log("Expression function "+notif);
// //  }

// //    getData("is working")

// //  const A=getData;
// //  const B=getData;
// //  const C=getData;

 
// // A('not working');
// // B('ERROR');
// // C('WARNING')





// //  const getUser=(txt)=> console.log("Arrow function is working "+txt);
     
   

// //  getUser("OK")

// //  const D=getUser;

// //  D("GOOD")



// // function getText(a,b){
// //    return a+b
// // }


// // let a=getText('2022','. 11.01')
// // console.log(a);

// // console.log(getText('2022'));

// // const isNumber=function(number){
// //    return number
// // }

// // const isString=(text, string, args)=> {
// //    return string
// // }


// // console.log(isString('stringify','222', 'abs'));

// // console.log(isNumber(11111111,));



// // let array=new Array("1","abs","javaScript","c++",77, false, null, undefined);

// // console.log(array[6]);

// // let array=[1,2,3,"a","b",['js','php','c#',['go','nodejs',['google','facbook']]]];

// // console.log(array[5][3][2][1]);

// // let array=[];

// // array[0]="JavaScript",
// // array[1]="Java"
// // array[2]="Nodejs";
// // array[6]=".NET";
// // array[3]="c++"


// // console.log(array[4]);

// // let array=['item1','item2','item3','item4','item5','item1','item2','item3','item4','item5'];

// // console.log(array.length);

// // for(let i=0; i<array.length; i++){
// //    if(i%2==0){
// //       console.log(array[i])
// //    }


// // }


// let array=['item1','item2','item3','item4','item5'];
// let array2=['item6','item7','item8','item9','item10'];

// console.log(array);

// console.log(array.length); // array uzunligi

// console.log(array.push('item6')) // ohiridan element qo'shadi
// console.log(array.pop()) // ohiridan element o'chiradi

// console.log(array.unshift('item -1','item 0')) // boshidan element qo'shadi
// console.log(array.shift()) // boshidan element o'chiradi



// console.log(array.slice(1,3)); // elementlarni arraydan indexdan indexgacha olib beradi ctr+c

// console.log(array.splice(2,1,"js"));  // elementlarni arraydan indexdan n ta gacha olib beradi ctr+x

// console.log(array.join("va")); // elementlarni stringa o'giradi va orasiga element joylaydi


// const array3=array.concat(array2).concat([1,2,3,44]).concat('a','b','c');

// console.log(array3);

// console.log(array.includes('item1'))


// console.log(array);  


// let n=+prompt('n=');
// let arr=[];
// let sum=1;

// for(let i=1; i<=n; i++){
//    arr.push(i);   
//    sum=sum*arr[i-1];
// }

// console.log(arr)
// console.log(sum)


let a=[1,2,3,4,5];

let b=[2,8,4,5,6];

let c=a.concat(b);

console.log(c);

let d=[];

for(let i=0; i<c.length; i++){

if(!d.includes(c[i])){
   d.push(c[i])
}

}

console.log(d)

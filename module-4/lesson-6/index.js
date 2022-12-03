"use strict";

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "java"];

// let newArray=array;

// deep clone

// for(let i=0; i<array.length; i++) {   1.v
//    newArray.push(array[i])
// }

// array.forEach((e) => {     2.v
//    newArray.push(e);
// })

// let newArray =array.map((e)=>{ 3.v
//      return  e
// })

// let newArray=[...array];  4.v

// newArray.push(11) // shalow clone

// console.log("orginal", array);
// console.log("copy", newArray);

// let room = {
//   isName: "Amazon",
//   location: "Xadra",
//   size: "medium",
// };

// let newRoom = room; // shalow clone

//let newRoom =Object.assign({ number:3 }, room); // v1

// let newRoom ={...room}   // v2

// let newRoom=JSON.parse( JSON.stringify(room) ) v3

// newRoom.color = "yellow & black";

// console.log("orginal:", room);
// console.log("copy:", newRoom);





// let sum = 7;

// function add() {
//    let sum = 6;

//    function newAdd() {
//       let sum = 10;
//       console.log(sum)
//    }

//    newAdd()
// }


// add()

// function newAdd() {
//    console.log("added task")
// }

// function newNumber() {
//    console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
// }



// function add(callBack1, callBack2) {
//    console.log("data");
//    setTimeout(() => {
//       callBack2()
//       setTimeout(() => {
//          callBack1()
//          setTimeout(() => {
//             console.log("loading . . . ");
//             setTimeout(() => {
//                console.log("fetching data . . .");
//                setTimeout(() => {
//                   console.log("success")
//                   setTimeout(() => {
//                      console.log("loaded data")
//                   }, 1000);
//                }, 1000)
//             }, 1000)
//          }, 1000)
//       }, 1000)
//    }, 1000)

// }




// $(".btn-danger").addEventListener('click', () => {
//    add(newAdd, newNumber)
// })


// PROMISE =>  
// PENDING =>
// RESOLVE => SUCCESS
// REJECT => FAIL 


const newTask = (task, data) => {

   let done = fetch('https://reqrerdfxtxys.in/api/users?page=2')

   return new Promise((resolve, reject) => {

      setTimeout(() => {
         if (done) {
            resolve(done)
         } else {
            reject("NOT FOUND DATA")
         }
      }, 2000)
   })

}

newTask(true, array)
   .then((result) => console.log(result.json()))
   .catch((error) => {
      console.log(error)
   })
   .finally(() => {
      console.log("finally")
   })
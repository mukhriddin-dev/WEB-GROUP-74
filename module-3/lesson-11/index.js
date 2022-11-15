"use strict";

const wrapper = document.querySelector(".wrapper");

let num = Math.floor(Math.random() * 50);


newslist.forEach((el, i) => {

   i++;
   let card = document.createElement("div");

   card.setAttribute("class", "card p-4 shadow w-25 m-5 rounded-0");

   card.innerHTML = ` <div class="row">
   <div class="col-4 p-0">
     <img src="https://picsum.photos/id/${i}/300/220" alt="post_img" class="img-fluid">
   </div>
   <div class="col-7">
     <span class="text-muted d-block">${el.date}</span>
     
     <strong class="mt-2 d-block">
      ${el.title}
     </strong>
     <a href="${el.link}" target="_blank">Barafsil . . . </a>
   </div>
   </div> `;

   wrapper.appendChild(card);
})







let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];






const newArrays = array.map((e, i, a) => {
   return e
})

const filterArrays = array.filter((e) => {
   return e !== 13
})

console.log(filterArrays);












// let newArray = [];


// forEach 


// for (let i=0; i<array.length; i++){
//    newArray[i]=array[i];
//    if(i%2==0){
//       console.log(array[i])
//    }

// }

// let newArrays=array.forEach( (e) => {
//    return e
// })

// console.log(newArrays)
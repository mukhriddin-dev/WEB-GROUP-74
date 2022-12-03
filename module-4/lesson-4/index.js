"use strict";

// $$('.box').forEach((el)=>{
//    el.addEventListener('click', (e)=>{
//       console.log(e.target);
//    })
// })

const box = createElement("div", "box", "box-7");
$('.wrapper').appendChild(box)


$('.wrapper').addEventListener('click', (e) => {
   if (e.target.classList.contains('box')) {
       e.target.style.borderRadius = "30px";
   }
})


// loacal => storage 

// console.log(window);

localStorage.setItem('user_name', "Ozodbek");
localStorage.setItem('age',   19);

let user=localStorage.getItem('user_name');
localStorage.removeItem('age')
localStorage.clear()

console.log(user);
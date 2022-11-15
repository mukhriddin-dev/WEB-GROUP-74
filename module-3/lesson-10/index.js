"use strict";


let add = document.querySelector('.btn-success'),
   remove = document.querySelector('.btn-danger'),
   test = document.querySelector('.btn-warning'),
   card = document.querySelector('.card');



// add , remove , contains , toogle

console.log(card.classList);

console.log(card.classList.contains('card'));


add.addEventListener('click', () => {
   card.classList.add('bg-info', 'shadow', 'mx-auto');
})

remove.addEventListener('click', () => {
   card.classList.remove('shadow', 'mx-auto');
});


//  test.addEventListener('click', ()=>{
//     if(card.classList.contains('swipe')){
//       card.classList.remove('swipe')
//     }else{
//       card.classList.add('swipe')
//     }
//  })


test.addEventListener('click', () => {
   card.classList.toggle('swipe')

   if (test.classList.contains('show')) {
      test.classList.remove('show')
      test.innerHTML = `<i class="bi bi-x-lg fs-2"></i>`;
   } else {
      test.classList.add('show')
      test.innerHTML = `<i class="bi bi-list fs-2"></i>`;
   }
})

// window.addEventListener('click', (e) => {
//    card.classList.add('swipe')
// })























// setTimeout(function () {
//    console.log("setTimeout");
//    document.body.style.backgroundColor = "coral";
// }, 3000)


// setTimeout(() => {
//    document.body.style.backgroundColor = "#fff";
// }, 6000)

// let text = document.querySelector('.text');
// let box = document.querySelector('.box');
// let stop = document.querySelector('.btn-danger');
// let start = document.querySelector('.btn-success');
// let num = 1;

// const load = ()=>{

//    setInterval(() => {
//       num++;
//       text.innerHTML = `${num}`
//       box.innerHTML = `${num}`
//       box.style.width = `${num*5}px`
//    }, 100)
// }

// const pause=()=>{
//    console.log("stop");
//    clearInterval(load)
// }

// stop.addEventListener('click', () => {
//      pause()
// })

// start.addEventListener('click', () => {
//    load()
// })


// let date = new Date();

// let weekday = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


// console.log(date.getDate()); // bugungi sana
// console.log(date.getDay()); // hafata kuni
// console.log(date.getMonth()); //  oy raqami
// console.log(date.getFullYear()); // yil
// console.log(date.getHours()); // soat
// console.log(date.getMinutes()); // daqiqa
// console.log(date.getSeconds()); // soniya
// console.log(date.getMilliseconds()) // milliseconds
// console.log(date.getTime()); // TIME
// console.log(date.getTimezoneOffset()); // 


// let time = date.getTime();


// console.log(year - Math.floor(time / 1000 / 60 / 60 / 24 / 365));

// let num = 1;

// setInterval(() => {

//    let date = new Date();
//    let day = date.getDate();
//    let weekDay = date.getDay();
//    let monthNumber = date.getMonth();
//    let year = date.getFullYear();
//    let hour = date.getHours();
//    let minute = date.getMinutes();
//    let seconds = date.getSeconds();

//    box.innerHTML = `<h5>${year} - ${month[monthNumber]} - ${day} - ${weekday[weekDay]} ${hour}:${minute}:${seconds}</h5>`


// }, 1000)























// let text=document.querySelector('.text');
// text.id="title";
// text.setAttribute('title','index');
// console.log(text);
// console.log(text.getAttribute('class'));
// text.removeAttribute('class');
"use strict";

// let warningBtn=document.querySelector('.btn-warning'),
//     infoBtn=document.querySelector('.btn-info'),
//     darkBtn=document.querySelector('.btn-dark'),
//     lightBtn=document.querySelector('.btn-light'),
//     card=document.querySelectorAll('.card');

//     console.log(card);




// card.style.backgroundColor="red"
// card.style.color="yellow"
// card.style.borderRadius="50px";





// function bgWarning(){
//    for(let i=0; i<=card.length;i++){
//       card[i].style.cssText="background-color:red; color:yellow; border-radius:50px; transform:translateX(-200%); transition:all 0.8s ease-in-out";
//    }

// }    

// function bgRest(){
//    for(let i=0; i<=card.length;i++){
//       card[i].style.cssText="background-color:white; color:#000; border-radius:0px; transform:translateX(0%); transition:all 0.8s ease-in-out";
//    }

// }



// warningBtn.onmousedown=function(){
//    this.style.backgroundColor="green";
// }
// warningBtn.onmouseup=bgRest
// infoBtn.ondblclick=bgRest


// warningBtn.addEventListener('click' , ()=>{
//    bgWarning()
// })

// infoBtn.addEventListener('click' , ()=>{
//    bgRest()
// })




// const styles={
//    color:"",
//    backgroundColor:"",
//    fontSize:""
// }

// styles.backgroundColor="#000";

// console.log(styles);


const text = document.querySelector('.text-danger'),
   input = document.querySelector('.form-control'),
   p = document.querySelector('p'),
   light = document.querySelector('#light'),
   dark = document.querySelector('#dark'),
   box = document.querySelector('.box');


// click =>  
// dblclick =>
// mouseover =>
// mouseout =>
// mousedown =>
// mouseup =>
// keydown =>
// keypress =>
// input => checkbox, radio , input


input.addEventListener('click', (e) => {
   // console.log(e.target);
   console.log(input.value);
   text.textContent = input.value
})


console.log(p.textContent = "EMPTY");



light.addEventListener('input', () => {
   document.body.style.backgroundColor = "#fff";
})

dark.addEventListener('input', () => {
   document.body.style.backgroundColor = "#000";
})


window.addEventListener('mousemove', (event) => {
   console.log(event.clientX);
   console.log(event.clientY);
   box.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`
})
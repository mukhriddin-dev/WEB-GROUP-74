"use strict";


let index = 0;



function slide() {

   if (index > $$(".list-item").length - 1) {
      index = 0
   }
   if (index < 0) {
      index = $$(".list-item").length - 1
   }

   $(".list").style.transform = `translateX( ${-index*1000}px)`;


}




$('#next').addEventListener('click', () => {
   index++;
   slide()
})

$('#prev').addEventListener('click', () => {
   index--;
   slide()
})
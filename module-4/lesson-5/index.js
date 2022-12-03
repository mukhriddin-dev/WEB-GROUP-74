"use strict";




// const array=['java','javascript', 'c++', 'php', 'python',"c#"];

// const [one, two , ...three]=array;

// const newArray=[...array , "html", ...array , ...array , ".net" ];

// console.log(newArray);



// console.log(one);
// console.log(two);
// console.log(three);



const room = {
   isname: "Amazon",
   size: "medium",
   locations: "Xadra branch NT",
   info:{
      color:"orange & black",
      goback:{
         nogoback:{
            go:{
               back:{
                  text:"STOP"
               }
            }
         }
      }
   }
}


const {isname,locations, info:{color} , info:{goback:{nogoback:{go:{back:{text}}}}}} = room;

console.log(isname);
console.log(locations);
console.log(color);
console.log(text);



const newObject={...room, locations:"Chimboy NT" , size:"large" , library:["book1", "book2"] }


console.log(newObject);


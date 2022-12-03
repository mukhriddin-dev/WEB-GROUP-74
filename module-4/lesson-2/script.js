"use strict";


// let users = [{
//       "id": 7,
//       "email": "michael.lawson@reqres.in",
//       "first_name": "Michael",
//       "last_name": "Lawson",
//       "avatar": "https://reqres.in/img/faces/7-image.jpg"
//    },
//    {
//       "id": 8,
//       "email": "lindsay.ferguson@reqres.in",
//       "first_name": "Lindsay",
//       "last_name": "Ferguson",
//       "avatar": "https://reqres.in/img/faces/8-image.jpg"
//    },
//    {
//       "id": 9,
//       "email": "tobias.funke@reqres.in",
//       "first_name": "Tobias",
//       "last_name": "Funke",
//       "avatar": "https://reqres.in/img/faces/9-image.jpg"
//    },
//    {
//       "id": 10,
//       "email": "byron.fields@reqres.in",
//       "first_name": "Byron",
//       "last_name": "Fields",
//       "avatar": "https://reqres.in/img/faces/10-image.jpg"
//    },
//    {
//       "id": 11,
//       "email": "george.edwards@reqres.in",
//       "first_name": "George",
//       "last_name": "Edwards",
//       "avatar": "https://reqres.in/img/faces/11-image.jpg"
//    },
//    {
//       "id": 12,
//       "email": "rachel.howell@reqres.in",
//       "first_name": "Rachel",
//       "last_name": "Howell",
//       "avatar": "https://reqres.in/img/faces/12-image.jpg"
//    }
// ];



// let template = document.querySelector('#root');

// let cloneTemplate = template.content.cloneNode(true);

// $('.wrapper').appendChild(cloneTemplate);



// users.forEach((el) => {
//    let cloneTemplate = template.content.cloneNode(true);
//    cloneTemplate.querySelector('.card-img-top').setAttribute('src', el.avatar)
//    cloneTemplate.querySelector('.card-title').textContent = `${el.first_name} ${el.last_name}`;
//    cloneTemplate.querySelector('.card-text').textContent = `${el.email}`;

//    $('.wrapper').appendChild(cloneTemplate)


// })


// $$('.box').forEach((el) => {
//    el.addEventListener('click', (e) => {
//       console.log(e.target.nextElementSibling);
//       e.target.nextElementSibling.style.borderRadius="20px";
//       e.target.previousElementSibling.style.backgroundColor="blue"
//       e.target.parentElement.style.backgroundColor="yellow";
//       console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
//    })
// })






















// users.forEach((el)=>{
//    const div=document.createElement('div');
//    div.classList.add('card','shadow');
//    div.innerHTML = `
//    <img src="https://picsum.photos/id/211/300/270" alt="rasm" class="card-img-top">
//          <div class="card-body">
//             <h2 class="card-title">
//                Card title
//             </h2>
//             <p class="card-text">
//                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, dignissimos, error ad sint eos voluptate eum nisi velit similique illo labore amet repellendus quisquam. Rem architecto alias iusto accusantium. Suscipit corporis ducimus officiis id nesciunt.
//             </p>
//          </div>

//    `
// })



// const a=()=>{
//    let data=[1,2,3,4,5,6,7,8,9,10]
//    c(data)
// }

// a()



// function b(text){
//    return "Nodejs "+text
// }


// function c(data){
//    console.log(data)
//    let js="javaScript"
//    let f=b(data);
//    console.log(f)
// }


let doted=$$('.doted');
console.log(doted);

$$('.accardion-btn').forEach((el,i) => {

   el.addEventListener('click', (e) => {

      const content = e.target.nextElementSibling;


      if (content.style.maxHeight) {
         content.style.maxHeight = null;
         doted[i].innerHTML = "+";

      } else {
         content.style.maxHeight = content.scrollHeight + "px";
         doted[i].innerHTML = "-";
      }
     

   })


})
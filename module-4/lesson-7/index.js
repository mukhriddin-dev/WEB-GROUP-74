"use strict";

// const coffe = async function () {
//    let data = await "salom"

//    return data

// }

// coffe()
//    .then((data) => console.log(data))
//    .catch((err) => console.log(err))
//    .finally((d) => console.log("Finally"))

// console.log("cola")

// console.log(window);

// function getUser() {
//    fetch("https://reqres.in/api/users?page=2")
//       .then((data) => data.json())
//       .then((result) => renderUser(result.data))
//       .catch((err) => console.log(err));
// }

// getUser();

// function renderUser(data) {
//    data.forEach((el) => {
//       const card = createElement(
//          "div",
//          "card shadow m-5",
//          `
      
//          <img src="${el.avatar}" alt="user" class="img-top-card">
//          <div class="card-body">
//          <h4>${el.first_name} ${el.last_name}</h4>
//          <p>${el.email}</p>
//          </div>

         
//          `
//       );

//       $(".wrapper").appendChild(card);
//    });
// }

// function getPosts() {
//    fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => postRender(data))
//       .catch((err) => console.log(err));
// }

// getPosts();

// function postRender(data = []) {

//    data.length > 0 ? data.forEach((item) => {
//       const listGroup = createElement(
//          "li",
//          "list-group-item",
//          `
//       <strong>${item.id} | ${item.title}</strong>
//       `
//       );
//       $('.list-group').appendChild(listGroup);
//    }) : alert("not found")
// }




// async function getPosts() {
//    try {

//       const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//       const result = await response.json();
//       postRender(result)
//       console.log(result);

//    } catch (err) {

//       console.log(err);

//    }
// }


// getPosts()


// function postRender(data = []) {

//    data.length > 0 ? data.forEach((item) => {
//       const listGroup = createElement(
//          "li",
//          "list-group-item",
//          `
//       <strong>${item.id} | ${item.title}</strong>
//       `
//       );
//       $('.list-group').appendChild(listGroup);
//    }) : alert("not found")
// }
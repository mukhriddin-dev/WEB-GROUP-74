"use strict";

let baseURL = "https://task.samid.uz/v1/task";
let token = localStorage.getItem("token")


// ============== get all data =================
async function getData() {
  const response = await fetch(`${baseURL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });
  const result = await response.json();
  dataRender(result.data)
}

getData();


// =========== render all data =====================
function dataRender(data = []) {
  data.length > 0 ?
    data.forEach((el) => {
      const tr = createElement("tr", "item", `
                  <td>${el.id}</td>
                  <td>${el.title} </td>
                  <td>${el.description}</td>
                  <td> <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn btn-primary" data-edit=${el.id}>EDIT</button></td>
                  <td> <button class="btn btn-danger" data-del=${el.id}>DELETE</button></td>
        `);


      $("#data").appendChild(tr);
    }) :
    console.log("not found data");
}

// ============== add data functions ================


function addData() {

  const title = $('#lesson').value.trim();
  const time = $('#runtime').value.trim();

  const params = {
    title: title,
    description: time,
    number: Math.floor(Math.random() * 100),
    status: 1
  }
  console.log(params);

  if (title.length === 0 || time.length === 0) {
    alert('Please fill . . .. ');
  } else {
    fetch(`${baseURL}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(params)
    }).then((response) => response.json()).then((res) => console.log(res)).catch((err) => console.log(err))
  }

}

$('#send').addEventListener('submit', () => {
  addData()
})


$('#data').addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-danger')) {
    let id = e.target.getAttribute('data-del');

    fetch(`${baseURL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({})
    })

    setTimeout(() => {
      window.location.reload()
    }, 1500)
  }
})



// ======= edit data =============================



$('#data').addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-primary')) {
    let id = e.target.getAttribute('data-edit');
    localStorage.setItem('editId', id);
    sendModal()
  }
})

async function sendModal() {
  let id = localStorage.getItem('editId');
  console.log(id);
  const data = await fetch(`${baseURL}/${id}`);
  const result = await data.json();
  console.log(result.data[0].title);
  $('#editlesson').value = result.data[0].title;
  $('#edittime').value = result.data[0].description;
}

$('#editsend').addEventListener('submit', () => {
  let id = localStorage.getItem('editId');
  let title = $('#editlesson').value;
  let time = $('#edittime').value;

  let params = {
    title: title,
    description: time,
    number: Math.floor(Math.random() * 100),
    status: 1
  }


  if (title.length === 0 || time.length === 0) {
    alert('Please fill form')
  } else {
    fetch(`${baseURL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(params)
    })
  }
})



let logUser = localStorage.getItem("username");

$("#user_name").innerHTML = logUser;

$('#logout').addEventListener('click', () => {
  localStorage.clear();
  redirect()
})

function redirect() {
  if (!localStorage.getItem('token')) {
    window.location.replace('./login.html')
  }
}

redirect()
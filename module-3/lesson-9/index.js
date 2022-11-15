"use strict";
window.addEventListener('DOMContentLoaded', () => {

   let formSubmit = document.querySelector('#submitForm'),
      textDanger = document.querySelector('.text-danger'),
      userName = document.querySelector('#userName'),
      userPassword = document.querySelector('#userPassword'),
      btnSubmit = document.querySelector('#btnSubmit'),
      userPasswordText = document.querySelector('#userPasswordText'),
      userText = document.querySelector('#userText');



   userName.addEventListener('focus', (e) => {
      e.target.style.border = "2px solid green";
      userText.style.color = "green";
   })


   userName.addEventListener('blur', (e) => {
      if (e.target.value.trim().length > 0) {
         e.target.style.border = "2px solid green";
         userText.style.color = "green";
         userText.innerHTML = `eneter username`;
         e.target.setAttribute('placeholder','eneter username')
      } else {
         e.target.style.border = "2px solid crimson";
         userText.style.color = "crimson";
         userText.innerHTML = `Please fill input`;
         e.target.setAttribute('placeholder','Please fill input')
      }
   })



   userPassword.addEventListener('focus', (e) => {
      e.target.style.border = "2px solid green";
      userPasswordText.style.color = "green";
   })


   userPassword.addEventListener('blur', (e) => {
      if (e.target.value.trim().length > 0) {
         e.target.style.border = "2px solid green";
         userPasswordText.style.color = "green";
         userPasswordText.innerHTML = `eneter userpassword`;
      } else {
         e.target.style.border = "2px solid crimson";
         userPasswordText.style.color = "crimson";
         userPasswordText.innerHTML = `Please fill input`;
      }
   })

   formSubmit.addEventListener('submit', () => {
      let userNameValue = userName.value.trim();
      let userPasswordValue = userPassword.value.trim();

      if (userNameValue.length === 0 || userPasswordValue.length === 0) {

         userPassword.style.border = "2px solid crimson";
         userPasswordText.style.color = "crimson";
         userPasswordText.innerHTML = `Please fill input`;
         userName.style.border = "2px solid crimson";
         userText.style.color = "crimson";
         userText.innerHTML = `Please fill input`;
      } else {
         userPassword.style.border = "2px solid green";
         userPasswordText.style.color = "green"
         userPasswordText.innerHTML = `enter userpassword`;
         userName.style.border = "2px solid green";
         userText.style.color = "green";
         userText.innerHTML = `enter username`;
      }
   })








   let themSelect = document.querySelector('#them');
   let body = document.querySelector('body');
   let heroSection = document.querySelector('#hero');
   let sizeText = document.querySelector('.size');


   themSelect.addEventListener('change', (salom) => {
      switch (salom.target.value) {
         case "dark":
            body.style.backgroundColor = "rgba(0,0,0,0.6)";
            break;
         case "light":
            body.style.backgroundColor = "#f3f3f3";
            break;
      }
   })


   window.addEventListener('scroll', (e) => {
      console.log(e);
      let scrollHeight = Math.floor(window.scrollY);
      if (scrollHeight >= 473) {
         heroSection.style.backgroundImage = "url('https://picsum.photos/id/412/800/600')";
         sizeText.style.transform = `translateY(210px)`;
         sizeText.style.zIndex = "1111";
      } else {
         heroSection.style.backgroundImage = "url('https://picsum.photos/id/112/800/600')";
         sizeText.style.transform = `translateY(-200px)`;
         sizeText.style.zIndex = "-33";
      }
   })








   let textCenter = document.querySelector('#textCenter');



   textCenter.setAttribute('class', 'text-warning text-center box');
   textCenter.setAttribute('id', 'none');
   textCenter.removeAttribute('id')
   console.log(textCenter.getAttribute('class'));


   let eye = document.querySelector('.eye');

   eye.addEventListener('click', () => {
      let type = userPassword.getAttribute('type');
      if (type == 'password') {
         userPassword.setAttribute('type', 'text')
         eye.innerHTML = `<i class="bi bi-eye-slash-fill fs-4"></i>`;
      } else {
         userPassword.setAttribute('type', 'password')
         eye.innerHTML = `<i class="bi bi-eye-fill fs-4"></i>`;
      }

   })


}) // die()
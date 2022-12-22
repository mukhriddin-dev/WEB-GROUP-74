let baseURL = "https://task.samid.uz/v1/user";



$('#signup').addEventListener("submit", (e) => {
   e.preventDefault();


   let username = $('#user_reg').value.trim();
   let password = $('#password_reg').value.trim();
   let email = $('#email_reg').value.trim();

   const params = {
      username: username,
      password: password,
      email: email
   }

   if (params.username.length === 0 || params.password.length === 0 || params.email.length === 0) {
      console.log("Please enter a username and password to connect");
   } else {
      fetch(`${baseURL}/sign-up`, {
         method: 'POST',
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(params)
      }).then((response) => response.json()).then((result) => {
         if (result.code == "1") {
            alert("Success!");
            setTimeout(() => {
               window.location.replace("./login.html");
            }, 2000)
         } else {
            alert(result.errors.username)

         }
      })
   }



})
function loginForm() {
    event.preventDefault();
   
   const email = document.querySelector("#email").value;
   const password = document.querySelector("#password").value;

   if (password.length < 8) {
       alert("password must be in 8 character")
   }
   else {
       userService.login(email,password).then(res=>{
        let data =res.data.docs;
           console.log(data);
           if(data.length == 0){
               alert("invalid login credential");
           }else{
               const user = data[0];
               localStorage.setItem("LOGGED_IN_USER",JSON.stringify(user));
               localStorage.setItem("logIn",true);
               alert("successfully login");
           window.location.href = "index.html";

           }
           
       }).catch(err=>{
           
           console.error(err.response.data);
           alert("unable to login");
       });
    //    alert("successfully login");
     
   }
}
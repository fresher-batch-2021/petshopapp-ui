function registerForm(){
                
    event.preventDefault();
   
    const name=document.querySelector("#name").value;
    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;
    const confirmPassword=document.querySelector("#confirmpassword").value;
    if(password.length < 8){
        alert("password must be 8 character");
    }
    else if(password!=confirmPassword){
        alert("password and confirm password not matched")
    }
    else{
        const regData = {
            "name":name,
            "email":email,
            "password":password,
            "confirmPassword":confirmPassword
        };
    console.log(regData);
     userService.register(regData).then(res=>{
       let data = res.data;
       console.log(data);
       alert("register successfully");
       window.location.href="login.html";
   }).catch(err=>{
       console.error(err.response.data);
       alert("unable to register")
   });
   
  
    }
}
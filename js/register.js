function registerForm(){
                
    event.preventDefault();
   
    const name=document.querySelector("#name").value;
    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;
    const confirmPassword=document.querySelector("#confirmpassword").value;
    console.log(name,email,password,confirmPassword);
    try{
        RegisterValidator.validate(name,email,password,confirmPassword)
    
        const regData = {
            "name":name,
            "email":email,
            "password":password,
            "confirmPassword":confirmPassword,
            "role":"USER"
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
    } catch(err){
        alert(err.message);
        console.error(err.message);
    }
}
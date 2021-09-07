function registerForm(){
                
    event.preventDefault();
   
    const name=document.querySelector("#name").value;
    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;
    const confirmPassword=document.querySelector("#confirmpassword").value;
    // console.log(name,email,password,confirmPassword);
    try{
        RegisterValidator.validate(name,email,password,confirmPassword)
    
        const regData = {
            "name":name,
            "email":email,
            "password":password,
            "confirmPassword":confirmPassword,
            "role":"USER"
        }
         emailExists(email).then(res=>{
            let exists = res;
            if(exists){
                toastr.error("","This email id is already exist",
                {
                    preventDuplicate:true
                });
            }
        else{
    console.log(regData);
     userService.register(regData).then(res=>{
       let data = res.data;
       console.log(data);
       toastr.success("Register successfully");
       setTimeout(function () {
        window.location.href = "login.html";
    }, 1000);
      
   }).catch(err=>{
       console.error(err.response.data);
       toastr.error("Unable to register");
   });
    }
 }). catch(err=>
    {
        toastr.error("err")
        // alert(err.message);
        // console.error(err.message);
    });
}
catch(err){
    console.log(err);
    toastr.error(err.message);
}
         }
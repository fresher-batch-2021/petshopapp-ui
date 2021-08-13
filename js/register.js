function registerForm(){
                
    event.preventDefault();
   
    const name=document.querySelector("#name").value;
    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;
    const confirmpassword=document.querySelector("#confirmpassword").value;
    if(password.length < 8){
        alert("password must be 8 character");
    }
    else if(password!=confirmpassword){
        alert("password and confirm password not matched")
    }
    else{
        const regdata = {
            "name":name,
            "email":email,
            "password":password,
            "confirmpassword":confirmpassword
        };
    
    console.log(regdata);
    let url="https://product-mock-api.herokuapp.com/petshopapp/api/v1/auth/register"
   axios.post(url,regdata).then(res=>{
       
       let data = res.data;
       console.log(data);
       alert("register successfully");
       window.location.href="login.html";
   }).catch(err=>{
       console.error(err);
       alert("error")
   });
   
  
    }
}
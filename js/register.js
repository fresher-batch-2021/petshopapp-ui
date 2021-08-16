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
    const dbUsername = "apikey-v2-2809fxu62dw0lybt6awh1vn0jxt1srfscx9z33bhudjy";
          const dbPassword ="ff4e6d701676a004128c9bdb601b52d2";
          const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);

         
    let url="https://f6c8119d-795e-4261-b941-ec3cbc9a4a29-bluemix.cloudantnosqldb.appdomain.cloud/petshop_user"
   axios.post(url,regdata, { headers: {'Authorization': basicAuth }}).then(res=>{
       let data = res.data;
       console.log(data);
       alert("register successfully");
       window.location.href="login.html";
   }).catch(err=>{
       console.error(err);
       alert("unable to register")
   });
   
  
    }
}
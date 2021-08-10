function loginform() {
    event.preventDefault();
   
    // alert("validation");

       // const username = document.getElementById("username").value;
       // const email = document.getElementById("email").value;

       // const password = document.getElementById("password").value;
       //     if(password == "123456789"){
       //         alert("login successfull");
               
               
       //     }
       //     else{

       //         alert("password is incorrect");
       //     }
           
           // window.location.href="index.html";
//    const name = document.querySelector("#username").value;
   const email = document.querySelector("#email").value;
   const password = document.querySelector("#password").value;

   if (password.length < 8) {
       alert("password must be in 8 character")
   }
   else {
       const logindata = {
        //    "user": name,
           "email": email,
           "password": password    
       };
       console.log(logindata);
       let url="https://product-mock-api.herokuapp.com/petshopapp/api/v1/auth/login";
       axios.post(url,logindata).then(res=>{
           let data =res.data;
           console.log(data);
           alert("successfully login");
           window.location.href = "index.html";
       }).catch(err=>{
           console.error(err);
           alert("unable to login");
       });
    //    alert("successfully login");
     
   }
}
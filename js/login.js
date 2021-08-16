function loginform() {
    event.preventDefault();
   
   const email = document.querySelector("#email").value;
   const password = document.querySelector("#password").value;

   if (password.length < 8) {
       alert("password must be in 8 character")
   }
   else {
       const logindata = {
        selector:{
            email:email,
            password:password
        },
        fields:["_id","email","password"],
       };
       console.log(logindata);
       const dbUsername = "apikey-v2-2809fxu62dw0lybt6awh1vn0jxt1srfscx9z33bhudjy";
          const dbPassword ="ff4e6d701676a004128c9bdb601b52d2";
          const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);

         
    let url="https://f6c8119d-795e-4261-b941-ec3cbc9a4a29-bluemix.cloudantnosqldb.appdomain.cloud/petshop_user/_find";
       
   axios.post(url,logindata, { headers: {'Authorization': basicAuth }}).then(res=>{
        let data =res.data.docs;
           console.log(data);
           if(data.length == 0){
               alert("invalid login credential");
           }else{
               const user = data[0];
               localStorage.setItem("LOGGED_IN_USER",JSON.stringify(user));
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
const dbUsername = "apikey-v2-2809fxu62dw0lybt6awh1vn0jxt1srfscx9z33bhudjy";
const dbPassword ="ff4e6d701676a004128c9bdb601b52d2";
const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
class userService{
    
    static login(email,password){
        let url="https://f6c8119d-795e-4261-b941-ec3cbc9a4a29-bluemix.cloudantnosqldb.appdomain.cloud/petshop_user/_find";

        const loginData = {
            selector:{
                email:email,
                password:password
            },
            fields:["_id","email","password"],
           };
           return axios.post(url,loginData, { headers: {'Authorization': basicAuth }});
        }
    static register(regData){
        const url="https://f6c8119d-795e-4261-b941-ec3cbc9a4a29-bluemix.cloudantnosqldb.appdomain.cloud/petshop_user";
        return axios.post(url,regData ,{ headers: {'Authorization': basicAuth }});
    }
}



  

     
   

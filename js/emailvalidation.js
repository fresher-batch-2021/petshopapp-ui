
async function emailExists(email){
const dbUsername = "apikey-v2-2809fxu62dw0lybt6awh1vn0jxt1srfscx9z33bhudjy";
const dbPassword = "ff4e6d701676a004128c9bdb601b52d2";
const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
let url="https://f6c8119d-795e-4261-b941-ec3cbc9a4a29-bluemix.cloudantnosqldb.appdomain.cloud/petshop_user/_find"; 
let emailobj={
    selector:{
        email:email
    },
    fields:["email"]
};
let res = await axios.post(url,emailobj,{headers: {'Authorization':basicAuth}});
return res.data.docs.length !=0;
}
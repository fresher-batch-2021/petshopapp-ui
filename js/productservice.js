const dbUsername = "apikey-v2-2809fxu62dw0lybt6awh1vn0jxt1srfscx9z33bhudjy";
  const dbPassword ="ff4e6d701676a004128c9bdb601b52d2";
  const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
class productService{
    static products(){
        const url = "https://f6c8119d-795e-4261-b941-ec3cbc9a4a29-bluemix.cloudantnosqldb.appdomain.cloud/petshop_products/_all_docs?include_docs=true";
      
      
        return axios.get(url,{ headers: {'Authorization': basicAuth }});
    }
    static viewItems(id){
        const url = `https://f6c8119d-795e-4261-b941-ec3cbc9a4a29-bluemix.cloudantnosqldb.appdomain.cloud/petshop_products/${id}`;

       return axios.get(url,{ headers: {'Authorization': basicAuth }});
    }
    static order(orderNow){
        const url = "https://f6c8119d-795e-4261-b941-ec3cbc9a4a29-bluemix.cloudantnosqldb.appdomain.cloud/petshop_order";
    
        return axios.post(url, orderNow, { headers: {'Authorization': basicAuth }});
    }
}

  //getting data from api
 
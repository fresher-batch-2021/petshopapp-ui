class orderService{
    //all products
    static getAllOrders() {
        const url = "https://f6c8119d-795e-4261-b941-ec3cbc9a4a29-bluemix.cloudantnosqldb.appdomain.cloud/petshop_order/_all_docs?include_docs=true";


        return axios.get(url, { headers: { 'Authorization': basicAuth } });
    }
    //view products
    static getOrder(id) {
        const url = `https://f6c8119d-795e-4261-b941-ec3cbc9a4a29-bluemix.cloudantnosqldb.appdomain.cloud/petshop_order/${id}`;

        return axios.get(url, { headers: { 'Authorization': basicAuth } });
    }
    //order products
    static order(orderNow) {
        const url = "https://f6c8119d-795e-4261-b941-ec3cbc9a4a29-bluemix.cloudantnosqldb.appdomain.cloud/petshop_order";

        return axios.post(url, orderNow, { headers: { 'Authorization': basicAuth } });
    }
    static cancelOrder(id,orderObj) {
        const url = `https://f6c8119d-795e-4261-b941-ec3cbc9a4a29-bluemix.cloudantnosqldb.appdomain.cloud/petshop_order/${id}`;

        return axios.put(url, orderObj, { headers: { 'Authorization': basicAuth } });
    }
}

  

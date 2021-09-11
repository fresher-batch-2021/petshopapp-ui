class orderService{
    //all products
    static getAllOrders() {
        const url = myUrl+"petshop_order/_all_docs?include_docs=true";


        return axios.get(url, { headers: { 'Authorization': basicAuth } });
    }
    //view products
    static getOrder(id) {
        const url = myUrl+`petshop_order/${id}`;

        return axios.get(url, { headers: { 'Authorization': basicAuth } });
    }
    //order products
    static order(orderNow) {
        const url = myUrl+"petshop_order";

        return axios.post(url, orderNow, { headers: { 'Authorization': basicAuth } });
    }
    static cancelOrder(id,orderObj) {
        const url = myUrl+`petshop_order/${id}`;

        return axios.put(url, orderObj, { headers: { 'Authorization': basicAuth } });
    }
}

  

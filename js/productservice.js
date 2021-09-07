
class productService{
    //indeximage
    static getCategories() {
        const url = Url+"petshop_indeximg/_all_docs?include_docs=true";
        return axios.get(url, { headers: {Authorization: basicAuth } });
    }
    //all products
    static products() {
        const url = Url+"petshop_products/_all_docs?include_docs=true";


        return axios.get(url, { headers: { 'Authorization': basicAuth } });
    }
    //view products
    static viewItems(id) {
        const url = Url+`petshop_products/${id}`;

        return axios.get(url, { headers: { 'Authorization': basicAuth } });
    }
    //order products
    static order(orderObj) {
        const url =Url+ "petshop_order";

        return axios.post(url, orderObj, { headers: { 'Authorization': basicAuth } });
    }
}

  

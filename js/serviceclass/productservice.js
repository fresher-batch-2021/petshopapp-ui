
class productService {
    //indeximage
    static getCategories() {
        const url = myUrl + "petshop_indeximg/_all_docs?include_docs=true";
        return axios.get(url, { headers: { Authorization: basicAuth } });
    }
    //all products
    static products() {
        const url = myUrl + "petshop_products/_all_docs?include_docs=true";


        return axios.get(url, { headers: { 'Authorization': basicAuth } });
    }
    //view products
    static viewItems(id) {
        const url = myUrl + `petshop_products/${id}`;

        return axios.get(url, { headers: { 'Authorization': basicAuth } });
    }
    //order products
    static order(orderObj) {
        const url = myUrl + "petshop_order";

        return axios.post(url, orderObj, { headers: { 'Authorization': basicAuth } });
    }
}



class stockService{
    static getOrders(id){
    
        
        const url=myUrl+`petshop_products/${id}`;
        return axios.get(url, { headers: { 'Authorization': basicAuth } });
    }
    static async reduceStock(id,quantity){
        const {data}= await this.getOrders(id);
        data.quantity = data.quantity-quantity;
        const url = myUrl+`petshop_products/${id}`;
        return axios.put(url,data,{headers:{'Authorization': basicAuth}});
    }
    static async increaseStock(id,quantity){
        const {data} = await this.getOrders(id);
        data.quantity= data.quantity+quantity;
        const url = myUrl+`petshop_products/${id}`;
        return axios.put(url,data,{headers:{'Authorization': basicAuth}});
    }
}
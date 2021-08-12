function viewItem(){
    const param =new URLSearchParams(window.location.search.substr(1));
    var id =parseInt(param.get("id"));

    const url =`https://product-mock-api.herokuapp.com/petshopapp/api/v1/products/${id}`;

    axios.get(url).then(res =>{
        let productData =res.data;
        console.log(productData);
        // alert("yesh");
        const id =productData.id;
        const name=productData.productName;
        const price=productData.price;
        const img_url=productData.imageUrl;
        const description=productData.description;
        alert(img_url);
        let content=`
        <p>hello</p>
        <img src="images${productData.imageUrl}"  alt=">
        <p>'${productData.productName}'hello</p>
        <br>
        <p>${productData.price}</p>
        <br>
        <p>'${productData.description}'</p>
        <br>

        
        `;
        document.querySelector(".dispt").innerHtml=content;
    }).catch(err =>{
        alert("erro");
    });
}
viewItem();
function viewItem(){
    const param =new URLSearchParams(window.location.search.substr(1));
    var id =parseInt(param.get("id"));
let content="";
    const url =`https://product-mock-api.herokuapp.com/petshopapp/api/v1/products/${id}`;

    axios.get(url).then(res =>{
        let productData =res.data;
        console.log(productData);
        // alert("product");
        let id =productData.id;
        let name=productData.productName;
        let category=productData.category;
        let price=productData.price;
        let img_url=productData.imageUrl;
        let description=productData.description;        
        content =
        `
        <img src="images/${img_url}" alt="">
        <p>${name}</p>
        <br>
        <p>${category}</p>
        <br>
        <p>${price}</p>
        <br>
        <p>${description}</p><br>
        <button onclick="" ><a href="order.html">ordernow</a></button>
        <button onclick="addToCart(${id},'${name}','${img_url}','${price}','${description}','${category}')">add to cart</button>
        `;
        // console.log(content);
        document.querySelector("#petProduct").innerHTML=content;
        
        // window.location.href="cart.html";
    }).catch(err =>{
        alert("error");
    });
    
}

function addToCart(id,name,img_url,price,description,category){
    
    let cartItemsStr=localStorage.getItem("cartElements");
    let cartItems = cartItemsStr != null ? JSON.parse(cartItemsStr):[];
    var qty=1;
    

    // If item already exist, update the quantity
    let index = cartItems.findIndex(cartItems=>cartItems.Id == id);
    // alert(index);
    console.log(index);
    
    if (index != -1){
        let cartObj = cartItems[index];
        console.log(cartObj);
        cartObj.Qty++;
        cartItems[index] = cartObj;
 
    }
    else{
        // if item not exist, add new item to cart
    let cartObj = {Id:id,Name:name,Price:price,Image_url:img_url,Description:description,Category:category,Qty:qty};
    alert(qty,category);
    console.log(cartObj);
    cartItems.push(cartObj);
    }
    
    localStorage.setItem("cartElements",JSON.stringify(cartItems));
    alert("item added to cart");
//    window.location.href='cart.html';
}


viewItem();
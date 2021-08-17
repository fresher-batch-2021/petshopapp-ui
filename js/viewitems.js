
function viewItem() {
    const param = new URLSearchParams(window.location.search.substr(1));
    var id = param.get("id");
    
    let content = "";
    const dbUsername = "apikey-v2-2809fxu62dw0lybt6awh1vn0jxt1srfscx9z33bhudjy";
  const dbPassword ="ff4e6d701676a004128c9bdb601b52d2";
  const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);

    const url = `https://f6c8119d-795e-4261-b941-ec3cbc9a4a29-bluemix.cloudantnosqldb.appdomain.cloud/petshop_products/${id}`;

    axios.get(url,{ headers: {'Authorization': basicAuth }}).then(res => {
        let productData = res.data;
        
        console.log(productData);
        // alert("product");
        let id = productData._id;
        let name = productData.productName;
        let category = productData.category;
        let price = productData.price;
        let img_url = productData.imageUrl;
        let description = productData.description;
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
        <button onclick="addToCart('${id}','${name}','${img_url}','${price}','${description}','${category}')">add to cart</button>
        `;
        // console.log(content);
        document.querySelector("#petProduct").innerHTML = content;


    }).catch(err => {
        alert("error");
    });

}

function addToCart(id, name, img_url, price, description, category) {
    loginCheck();
    let cartItemsStr = localStorage.getItem("cartElements");
    let cartItems = cartItemsStr != null ? JSON.parse(cartItemsStr) : [];
    var qty = 1;


    // If item already exist, update the quantity
    let index = cartItems.findIndex(cartItems => cartItems.Id == id);
    // alert(index);
    console.log(index);

    if (index != -1) {
        let cartObj = cartItems[index];
        console.log(cartObj);
        cartObj.Qty++;
        cartItems[index] = cartObj;

    }
    else {

        let cartObj = { Id: id, Name: name, Price: price, Image_url: img_url, Description: description, Category: category, Qty: qty };
        // alert(qty, category);
        console.log(cartObj);
        cartItems.push(cartObj);
    }

    localStorage.setItem("cartElements", JSON.stringify(cartItems));
    alert("item added to cart");
}
function loginCheck(){
    if(JSON.parse(localStorage.getItem("logIn"))==false){
    alert("Need to login first");
    window.location.href="login.html";
    return false;
    }
    }

viewItem();

function viewItem() {
    const param = new URLSearchParams(window.location.search.substr(1));
    var id = param.get("id");
  
   productService.viewItems(id).then(res => {
        let productData = res.data;
        let id = productData._id;
        let name = productData.productName;
        let category = productData.category;
        let price = productData.price;
        let img_url = productData.imageUrl;
        let description = productData.description;
        let  content =
            `<div class="productImage">
        <img src="images/${img_url}" alt="img"></div>
        <div class="productDetails">
        <p>${name}</p>
        <br>
        <p>For: ${category}</p>
        <br>
        <p>₹${price}</p>
        <br>
        <p>${description}</p><br>
        <button onclick="addToCart('${id}','${name}','${img_url}','${price}','${description}','${category}')">Add to Cart</button>
       </div> `;
        
        document.querySelector("#petProduct").innerHTML = content;


    }).catch(err => {
        toastr.error("error");
    });

}

function addToCart(id, name, img_url, price, description, category) {
    loginCheck();
    let cartItemsStr = localStorage.getItem("cartElements");
    let cartItems = cartItemsStr != null ? JSON.parse(cartItemsStr) : [];
    var quantity = 1;
    // If item already exist, update the quantity
    let index = cartItems.findIndex(cartItems => cartItems.Id == id);
    console.log(index);
    if (index != -1) {
        let cartObj = cartItems[index];
        console.log(cartObj);
        cartObj.Quantity++;
        cartItems[index] = cartObj;
    }
    else {
        let cartObj = { Id: id, Name: name, Price: price, Image_url: img_url, Description: description, Category: category, Quantity: quantity };
        // console.log(cartObj);
        cartItems.push(cartObj);
    }
    localStorage.setItem("cartElements", JSON.stringify(cartItems));
    toastr.success("","item added to cart",{
        preventDuplicates:true
    });

}
viewItem();
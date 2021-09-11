
function viewItem() {
    $("#message").show();
    setTimeout(function () {
        const param = new URLSearchParams(window.location.search.substr(1));
        let productId = param.get("id");

        productService.viewItems(productId).then(res => {
            let productData = res.data;
            let id = productData._id;
            let name = productData.productName;
            let category = productData.category;
            let quantity = productData.quantity;
            let price = productData.price;
            let img_Url = productData.imageUrl;
            let description = productData.description;
            let content =
                `<div class="productImage">
            <h1>View Item</h1>
        <img src="images/${img_Url}" alt="img"></div>
        <div class="productDetails">
        <p>${name}</p>
        <br>
        <p>For: ${category}</p>
        <br>
        <p>₹${price}</p>
        <br>
        <p>${description}</p><br>
        <button onclick="addToCart('${id}','${name}','${img_Url}','${price}','${description}','${category}')">Add to Cart</button>
       </div> `;

            document.querySelector("#petProduct").innerHTML = content;


        }).catch(err => {
            toastr.error(ErrorMessage.CATCH_ERROR);
        });
        $("#message").hide();
    }, 1000);

}

function addToCart(id, name, img_Url, price, description, category) {
    loginCheck();
    let cartItemsStr = localStorage.getItem("cartElements");
    let cartItems = cartItemsStr != null ? JSON.parse(cartItemsStr) : [];
    const quantity = 1;
    // If item already exist, update the quantity
    let index = cartItems.findIndex(cartItems => cartItems.id == id);
    if (index != -1) {
        let cartObj = cartItems[index];
        console.log(cartObj);
        cartObj.quantity++;
        cartItems[index] = cartObj;
    }
    else {
        const cartObj = { id: id, name: name, price: price, image_Url: img_Url, description: description, category: category, quantity: quantity };
        console.log(cartObj);
        cartItems.push(cartObj);

    }

    localStorage.setItem("cartElements", JSON.stringify(cartItems));
    toastr.success("", ErrorMessage.PRODUCT_SUCCESS, {
        preventDuplicates: true
    });
    setTimeout(function () {
        window.location.href = `product.html?category=${category}`
    }, 1500);


}
viewItem();
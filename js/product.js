
function gettingData() {

  //getting category from url
  const param = new URLSearchParams(window.location.search.substr(1));
  var category = (param.get("category"));
  var content = `<hr><h1 style=" margin-top: 20px;">Product for ${category}</h1><hr>`;
  productService.products().then(res => {
    let data = res.data.rows;
    let petProducts = data.map(obj=>obj.doc);
    for (let product of petProducts) {
      if (product.category == category) {
        console.log(product);
        content = content + `<div class="dogitems" id="dogitems">
    <a href="viewitems.html?id=${product._id}"><img src="images/${product.imageUrl}" alt="image"></a><br>
    <p>${product.productName}</p>
    <p>${product.description}</p>
    <p>Price : ₹${product.price}</p>
    
  </div>`;
        document.querySelector("#dogContainer").innerHTML = content;

     }

    }
    // alert("data got successfull");
  }).catch(err => {
    alert("error");
  });
}
gettingData();


















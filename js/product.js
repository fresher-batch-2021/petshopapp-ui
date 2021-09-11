

gettingData();
function gettingData() {
  const param = new URLSearchParams(window.location.search.substr(1));
  let category = (param.get("category"));
  $("#message").show();
  setTimeout(function () {
    let count = 0;
    //getting category from url
    let content = `<h1 class="producthead" style=" margin-top: 20px;">Products for ${category}</h1>`;

    productService.products().then(res => {
      let data = res.data.rows;
      let petProducts = data.map(obj => obj.doc);
      for (let product of petProducts) {
        if (product.category == category) {
          console.log(product);
          content = content + `<div class="dogitems" id="dogitems">
    <a href="viewitems.html?id=${product._id}">
    <img src="images/${product.imageUrl}" alt="image"></a><br>
    <p>${product.productName}</p>
    <p>Price : ₹${product.price}</p>
  </div>`;
          count = count + 1; {
            if (count == 4) {
              content = content + `<br>`;
              count = 0;
            }
          }
          $("#message").hide();
          document.querySelector("#dogContainer").innerHTML = content;
        }

      }

    }).catch(err => {
      console.log(err);
    });
  }, 1000);
}

function searchProducts() {

  event.preventDefault();

  //1. Get search text box value
  let productName = document.querySelector("#search").value;


  //2. Get all products
  productService.products().then(res => {
    const data = res.data.rows;
    const productData = data.map(obj => obj.doc);

    //3. Filter products based on the given search key word
    let filteredProducts = productData;
    if (productName != "") {
      filteredProducts = productData.filter(obj => obj.category == category && obj.productName.toLowerCase().indexOf(productName.toLowerCase()) != -1);
    }
    let content = "";
    if (filteredProducts == "") {
      content = `<h1>No Item Found</h1>`;

    }
    else {

      console.table(filteredProducts);

      for (let product of filteredProducts) {

        content = content + `<div class="dogitems" id="dogitems">
    <a href="viewitems.html?id=${product.productName}">
    <img src="images/${product.imageUrl}" alt="image"></a><br>
    <p>${product.productName}</p>
   <p>${product.description}</p>
    <p>Price : ₹${product.price}</p>  
  </div>`;

      }
    }
    document.querySelector("#dogContainer").innerHTML = content;

  });
}
















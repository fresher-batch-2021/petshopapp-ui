
function gettingData() {

  //getting category from url
  const param = new URLSearchParams(window.location.search.substr(1));
  var category = (param.get("category"));
  var content = `<hr><h1 style=" margin-top: 20px;">Product for ${category}</h1><hr>`;
  const dbUsername = "apikey-v2-2809fxu62dw0lybt6awh1vn0jxt1srfscx9z33bhudjy";
  const dbPassword ="ff4e6d701676a004128c9bdb601b52d2";
  const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);


  //getting data from api
  const url = "https://f6c8119d-795e-4261-b941-ec3cbc9a4a29-bluemix.cloudantnosqldb.appdomain.cloud/petshop_products/_all_docs?include_docs=true";
  console.log(url);

  axios.get(url,{ headers: {'Authorization': basicAuth }}).then(res => {
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


















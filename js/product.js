const param = new URLSearchParams(window.location.search.substr(1));
let category = (param.get("category"));

function gettingData() {
let count=0;
  //getting category from url
  let content = `<hr><h1 style=" margin-top: 20px;">Product for ${category}</h1><hr>`;
  productService.products().then(res => {
    let data = res.data.rows;
    let petProducts = data.map(obj=>obj.doc);
    for (let product of petProducts) {
      if (product.category == category) {
        console.log(product);
        content = content + `<div class="dogitems" id="dogitems">
    <a href="viewitems.html?id=${product._id}">
    <img src="images/${product.imageUrl}" alt="image"></a><br>
    <p>${product.productName}</p>
  
    <p>Price : ₹${product.price}</p>
    
  </div>`;
        count =count+1;{
          if(count==4){
            content = content+`<br>`;
            count=0;
          }
        }
        document.querySelector("#dogContainer").innerHTML = content;

     }

    }
    // alert("data got successfull");
  }).catch(err => {
    alert("error");
  });
}
gettingData();

function searchProducts(){
  event.preventDefault();
  // console.log("Search Products");
  //1. Get search text box value
  let productName = document.querySelector("#search").value;
  // console.log("Search:", productName);

  //2. GEt all products
  productService.products().then(res=>{
    const data=res.data.rows;
    const productData=data.map(obj=>obj.doc);
    // console.log(productData);

    //3. Filter products based on the given search key word
    let filteredProducts = productData;
    if(productName !=""){
      filteredProducts = productData.filter(obj=>obj.category==category &&  obj.productName.toLowerCase().indexOf(productName.toLowerCase())!=-1);
    }
    console.table(filteredProducts);
    let content="";
    for(let product of filteredProducts){
      
        // console.log(product);
        content = content + `<div class="dogitems" id="dogitems">
    <a href="viewitems.html?id=${product.productName}">
    <img src="images/${product.imageUrl}" alt="image"></a><br>
    <p>${product.productName}</p>
   <p>${product.description}</p>
    <p>Price : ₹${product.price}</p>
    
  </div>`;
  document.querySelector("#dogContainer").innerHTML =  content;   
    
  }
});
}
















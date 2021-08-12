 
 function gettingData(){
  //  alert("hello");
//getting category from url
const param=new URLSearchParams(window.location.search.substr(1));
var category =(param.get("category"));
var content=`<hr><h1 style=" margin-top: 20px;">Product for ${category}</h1><hr>`;
// alert(category);


//getting data from api
const url=`https://product-mock-api.herokuapp.com/petshopapp/api/v1/products`;
console.log(url);
// alert(url);
axios.get(url).then(res =>{
  let petProducts =res.data;
  for(let product of petProducts){
  if(product.category==category){
    console.log(product);
    content = content+ `<div class="dogitems" id="dogitems">
    <a href="viewitems.html?id=${product.id}"><img src="images/${product.imageUrl}" alt="image"></a><br>
    <p>${product.productName}</p>
    <p>${product.description}</p>
    <p>Price : ₹${product.price}</p>
    
  </div>`;
  document.querySelector("#dogcontainer").innerHTML = content;
  }

  }
  // alert("data got successfull");
}).catch(err =>{
  alert("error");
});
 }
 gettingData();

// product for cat
















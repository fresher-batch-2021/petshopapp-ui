
function displayCart(){
  console.log(JSON.parse(localStorage.getItem("cartElements")));
let cartItem=JSON.parse(localStorage.getItem("cartElements"));
let content = `<table>
<caption>cart Table</caption>
<tr>
    <th class="itemno">Item No</th>
    <th class="category">category</th>
    <th class="product">Product</th>
    <th class="qty">Quantity</th>
    <th class="price">Price</th>
     <th class=""></th>
    
</tr>`;
  let end = `</table>`;

for(let item of cartItem){
    content=content+`<tr> <td>${item.Id}</td>
    <td>${item.Category}</td>
    <td>${item.Description  }</td>
    <td>${item.Qty}</td>
    <td>${item.Price}</td>
    
  </tr> `
}
content= content + end;
document.querySelector("#table").innerHTML=content;
function deleteCartData(index){
  var arr=JSON.parse(localStorage.getItem("cartElements"));
  
  if(arr[index].Qty>1){
      
      arr[index].Qty--;
  }
  else{
      
      arr.splice(index,1);
  }
  console.log(arr[index]);
  localStorage.setItem("cartElements",JSON.stringify(arr));
  cartItems();
  }
// alert("item added to cart")
}
displayCart();
// <td><button type="submit" onclick="deleteCartData(${count-1})">delete</button></td>// <td><button type="submit" onclick="deleteCartData(${count-1})">delete</button></td>
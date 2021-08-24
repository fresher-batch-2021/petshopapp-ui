loginCheck();
function displayCart() {
  console.log(JSON.parse(localStorage.getItem("cartElements")));
  let cartItem = JSON.parse(localStorage.getItem("cartElements"));
  let count = 1;
  let sum = 0;
  let total =0;
  let content = `<table>
<thead>
<tr>
    <th class="itemno">Item No</th>
    <th class="category">category</th>
    <th class="product">Product</th>
    <th class="qty">Quantity</th>
    <th class="price">Price</th>
     <th class="delete">Delete Items</th>
     
    
</tr></thead><tbody>`;
  let end = `
  </tbody>
  </table>`;

  for (let item of cartItem) {
    total = item.Qty*item.Price;
    content = content + `<tr> 
    <td>${item.Id}</td>
    <td>${item.Category}</td>
    <td>${item.Description}</td>
    <td>${item.Qty}</td>
    <td>${item.Price*item.Qty}</td>
    <td><button type="submit" onclick="deleteCartData(${count-1})">delete</button></td>
    
  </tr> `
  sum=sum+total;
    count++;
  }
  content+=`
  <tr>
  
  <td colspan="6">total Amount: ${sum}</td>
  
  </tr>
  `;
  localStorage.setItem("TOTAL_BILL-AMOUNT",sum);
  content = content + end;
  document.querySelector("#table").innerHTML = content;

  // alert("item added to cart")
}
function deleteCartData(index) {
  var arr = JSON.parse(localStorage.getItem("cartElements"));
  // alert(index);
  if (arr[index].Qty > 1) {

    arr[index].Qty--;
  }
  else {

    arr.splice(index, 1);
  }
  console.log(arr[index]);
  localStorage.setItem("cartElements", JSON.stringify(arr));
  displayCart();
}
function cartCheck(){
  let cartItem=JSON.parse(localStorage.getItem("cartElements"));
    if (cartItem==null||cartItem=="")
     {
      alert("cart is empty");
      
    } else 
    {
      window.location.href="ordernow.html";
    }
}
displayCart();

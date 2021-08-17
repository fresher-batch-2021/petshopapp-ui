loginCheck();
function displayCart() {
  console.log(JSON.parse(localStorage.getItem("cartElements")));
  let cartItem = JSON.parse(localStorage.getItem("cartElements"));
  let count = 0;
  let content = `<table>

<tr>
    <th class="itemno">Item No</th>
    <th class="category">category</th>
    <th class="product">Product</th>
    <th class="qty">Quantity</th>
    <th class="price">Price</th>
     <th class="delete">Delete Items</th>
     
    
</tr>`;
  let end = `</table>`;

  for (let item of cartItem) {
    content = content + `<tr> 
    <td>${item.Id}</td>
    <td>${item.Category}</td>
    <td>${item.Description}</td>
    <td>${item.Qty}</td>
    <td>${item.Price}</td>
    <td><button type="submit" onclick="deleteCartData(${count})">delete</button></td>
    
  </tr> `
    count++;
  }
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
displayCart();

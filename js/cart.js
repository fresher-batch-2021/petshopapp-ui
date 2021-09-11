loginCheck();
function displayCart() {
  $("#message").show();
  setTimeout(function () {
    console.log(JSON.parse(localStorage.getItem("cartElements")));
    let cartItem = JSON.parse(localStorage.getItem("cartElements"));
    let count = 1;
    let sum = 0;
    let total = 0;
    let content = `<table class="table-content">
<thead>
<tr>
    <th class="itemNo">Item No</th>
    <th class="image">Image</th>
    <th class="category">category</th>
    <th class="product">Product</th>
    <th class="price">Price</th>
    <th class="qty">Quantity</th>
    <th class="amount">Amount</th>
     <th class="delete">Delete Items</th>    
</tr></thead><tbody>`;
    let end = `
  </tbody>
  </table><div class="orderbtn"><p><a href="order.html">Ordernow</a></p></div>
  <button type="button" onclick="emptyCart()">Empty Cart</button>`;
    if (cartItem) {
      for (let item of cartItem) {
        total = item.quantity * item.price;
        content = content + `<tr> 
    <td>${count}</td>
    <td><img class="cartImage" src="images/${item.image_Url}" alt="img"></td>
    <td>${item.category}</td>
    <td>${item.name}</td>
    <td>₹ ${item.price}</td>
    <td>${item.quantity}</td>
    <td>₹ ${item.price * item.quantity}</td>
    <td><button type="submit" onclick="deleteCartData(${count - 1})">delete</button></td>
  </tr>`
        sum = sum + total;
        count++;
      }
      content += `
  <tr>
  <td colspan="8">Total Amount: ${sum}</td>
  </tr>
  `;
      localStorage.setItem("TOTAL_BILL-AMOUNT", sum);
      content = content + end;
      document.querySelector("#table").innerHTML = content;
    }
    else {
      console.log("cart is empty", cartItem);
    }
    $("#message").hide();
  }, 1000)
}
// delete cart data
function deleteCartData(index) {
  var arr = JSON.parse(localStorage.getItem("cartElements"));
  if (arr[index].quantity > 1) {
    arr[index].quantity--;
  }
  else {
    arr.splice(index, 1);
  }
  toastr.warning("", ErrorMessage.CART_ITEM_IS_DELETED, {
    preventDuplicates: true
  });
  
  localStorage.setItem("cartElements", JSON.stringify(arr));
  displayCart();
}

function cartCheck() {
  let cartItem = JSON.parse(localStorage.getItem("cartElements"));
  if (cartItem == null || cartItem == "") {
    toastr.warning(ErrorMessage.CART_EMPTY);
  } else {
    window.location.href = "ordernow.html";
  }
}
displayCart();

// empty cart
function emptyCart() {
  localStorage.removeItem("cartElements");
  toastr.success(ErrorMessage.CART_EMPTY);
  setTimeout(function () {
    window.location.reload();
  }, 1000);
}
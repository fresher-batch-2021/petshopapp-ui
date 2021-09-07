function myOrder() {
    
    let email = JSON.parse(localStorage.getItem("LOGGED_IN_USER"))?.email;
    console.log(email);
    orderService.getAllOrders().then(res => {
        let orders = res.data.rows.map(obj => obj.doc);

        console.table(orders);
        let myOrders = orders.filter(obj => obj.email == email);

        let count = 1;
        let content = `<table class="table-content">
<thead>
<tr>
    <th class="sno">S.no</th>
    <th class="image">Image</th>
    <th class="product">Product Name</th>
    <th class="price">Price</th>
    <th class="qty">Quantity</th>
    <th class="category">Category</th>
    <th class="amount">Amount</th>
    <th class="date">Order date</th>
    <th class="status">Status</th>
    <th class="delete">Delete Items</th>
     
    
</tr></thead><tbody>`;
        let end = `
  </tbody>
  </table>`;
        for (let order of myOrders) {
            
            let orderedDate = new Date(order.date).toJSON(); //.substr(0, 10);
            let date = moment(new Date(orderedDate)).format("DD-MM-YYYY");


            for (item of order.productDetails) {
                content = content + `<tr>
                <td>${count}</td>
             <td><img src ="images/${item.image_url}" alt="img" width="80px"></td>
               <td>${item.name}</td>
               <td>₹${item.price}</td>
               <td>${item.quantity}</td>
               <td>${item.category}</td>
               <td>₹${order.totalAmount}</td>               
               <td>${date}</td>
               <td>${order.status}</td>`;
                if (order.status != "DELIVERED") {
                    if (order.status != "CANCELLED") {
                        content += `<td><p><button class="btn btn-danger" onClick="cancelOrder('${order._id}')">Cancel Order</button></td></p></tr>`;
                    }
                    else {
                        content += `<td></td>`;
                    }
                }
                else {
                    content += `<td></td>`;
                }
                count++;

            }
        }
        console.log(content);
       
        content = content + end;
        document.querySelector("#myOrderContainer").innerHTML = content;
    });
}
myOrder();


function cancelOrder(id) {
    toastr.success("Your order is cancelled");
    setTimeout(function () {
        window.location.reload();
    }, 5000);
    orderService.getOrder(id).then(res => {
        let orderObj = res.data;
        orderObj.status = "CANCELLED";
        orderService.cancelOrder(id, orderObj).then(res1 => {
            // alert("successfully deleted");
            window.location.reload();
        }).catch(err => {
            toastr.warning("Unable to log in");
            console.log(err.response.message);
        })
    })
}
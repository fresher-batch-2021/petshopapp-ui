function myOrder() {
    let email = JSON.parse(localStorage.getItem("LOGGED_IN_USER"))?.email;
    console.log(email);
    orderService.getAllOrders().then(res => {
        let orders = res.data.rows.map(obj => obj.doc);

        console.table(orders);
        let myOrders = orders.filter(obj => obj.email == email);


        let content = `<table>
<thead>
<tr>
    
    <th class="image">Image</th>
    <th class="product">Product Name</th>
    <th class="price">Price</th>
    <th class="qty">Quantity</th>
    <th class="category">category</th>
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
             <td><img src ="images/${item.Image_url}" alt="img" width="80px"></td>
               <td>${item.Name}</td>
               
               <td>${item.Price}</td>
               <td>${item.Quantity}</td>
               <td>${item.Category}</td>
               <td>${order.totalAmount}</td>               
               <td>${date}</td>
               <td>${order.status}</td>
               <td><button class="btn btn-danger" onClick="cancelOrder('${order._id}')">Cancel order</button></td></tr>`;
            }
        }
        console.log(content);
        content = content + end;
        document.querySelector("#myOrderContainer").innerHTML = content;
    });
}
myOrder();


function cancelOrder(id) {
    alert("order is cancelled");
    orderService.getOrder(id).then(res => {
        let orderObj = res.data;
        orderObj.status = "CANCELLED";
        orderService.cancelOrder(id, orderObj).then(res1 => {
            alert("successfully deleted");
            window.location.reload();
        }).catch(err => {
            alert("error");
            console.log(err.response.message);
        })
    })
}
function myOrder()
{ 
    let email=JSON.parse(localStorage.getItem("LOGGED_IN_USER"))?.email;
    console.log(email);
    orderService.getAllOrders().then(res=>
        {
            let orders=res.data.rows.map(obj=>obj.doc);
            
            console.table(orders);
            let myOrders=orders.filter(obj=>obj.email==email);
        
            let content="";
            for(let order of myOrders)
            {
                for(item of order.productDetails){
                content=content+`<tr>
             <td><img src ="images/${item.Image_url}" alt="img" width="80px"></td>
               <td>${item.Name}</td>
               
               <td>${item.Price}</td>
               <td>${item.Quantity}</td>
               <td>${item.Category}</td>
               <td>${order.totalAmount}</td></tr>`;
            }
            content=content +`<td>${order.status}</td>
            <td>${order.date}</td><br>`
            }
            console.log(content);
            document.querySelector("#myOrderContainer").innerHTML=content;
        });
}
myOrder();
function myOrder()
{ 
    let email=JSON.parse(localStorage.getItem("LOGGED_IN_USER"))?.email;
    console.log(email);
    orderService.getAllOrders().then(res=>
        {
            let orders=res.data.rows.map(obj=>obj.doc);
            
            console.table(orders);
            let myOrders=orders.filter(obj=>obj.email==email);
            console.log(myOrders);
            let content="";
            for(let order of myOrders)
            {
                content=content+`<tr>
             
               <td>${order.name}</td>
               <td>${order.phonenumber}</td>
               <td>${order.date}</td>
               <td>${order.address}</td>
               <td>${order.totalAmount}</td>
               <td>${order.status}</td>

               </tr> <br>
                `;
            }
            console.log(content);
            document.querySelector("#myOrderContainer").innerHTML=content;
        });
}
myOrder();
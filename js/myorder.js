function myOrder()
{ 
    let email=JSON.parse(localStorage.getItem("LOGGED_IN_USER"))?.email;
    console.log(email);
    orderService.getAllOrders().then(res=>
        {
            let orders=res.data.rows.map(obj=>obj.doc);
            
            console.table(orders);
            let myOrders=orders.filter(obj=>obj.email==email);
            let thyagu=JSON.stringify(myOrders)
            console.log("thyagu"+thyagu)
            let content="";
            for(let order of myOrders)
            {
                for(item of order.productDetails){
                content=content+`
             <p><img src ="images/${item.Image_url}" alt="img" width="80px"></p>
               <p>${item.Name}<p>
               
               <p>${item.Price}</p>
               <p>${item.Quantity}</p>
               <p>${item.Category}</p>
               <p>${order.totalAmount}</p>
               <p>${order.status}</p>

                <br>
                `;
            }
            }
            console.log(content);
            document.querySelector("#myOrderContainer").innerHTML=content;
        });
}
myOrder();
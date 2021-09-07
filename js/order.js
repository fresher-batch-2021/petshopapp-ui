// loginCheck();
let total =JSON.parse(localStorage.getItem("TOTAL_BILL-AMOUNT"));

document.querySelector("#totalAmount").value = total;
function orderNow() {
    alert("hi");
    const name = document.querySelector("#userName").value;
    console.log("NAme:", name);
    const phonenumber = document.querySelector("#phoneNumber").value;
    const date = document.querySelector("#date").value;
    const address = document.querySelector("#address").value;
    let product = JSON.parse(localStorage.getItem("cartElements"));
    let user=JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    let loggedInEmail=user!=null?user.email:null;
    event.preventDefault();
    alert("helo")
    try {
        OrderValidation.validate(name, phonenumber, date, address,total, product)
        let orderObj = {
            name: name,
            phonenumber: phonenumber,
            date: date,
            address: address,
            status:"ORDERED",
            totalAmount:total,
            Payment:"Cash On Delivery",
            productDetails: product,
            email:loggedInEmail
        };
        console.log("thyagu",orderObj)
        productService.order(orderObj).then(res => {
            toastr.success("Your order placed successfully");
            setTimeout(function(){
                window.location.reload();
            },1000)
          
            
            
        }).catch(err => {
            toastr.error("Order failed");
        });
    } catch (err) {
        console.log(err.message);
    }
//     const totalBillAmout = localStorage.getItem("TOTAL_BILL_AMOUNT");
// document.querySelector("#totalAmount").value = totalBillAmout;
}


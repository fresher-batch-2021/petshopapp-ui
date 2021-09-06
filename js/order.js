// loginCheck();
let total = localStorage.getItem("TOTAL_BILL-AMOUNT");
document.querySelector("#totalAmount").value = total;
function orderNow() {
    const name = document.querySelector("#userName").value;
    const phonenumber = document.querySelector("#phoneNumber").value;
    const date = document.querySelector("#date").value;
    const address = document.querySelector("#address").value;
    const totalAmount = document.querySelector("#totalAmount").value;
    let product = JSON.parse(localStorage.getItem("cartElements"));
    let user=JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    let loggedInEmail=user!=null?user.email:null;
    event.preventDefault();
    try {
        OrderValidation.validate(name, phonenumber, date, address,totalAmount, product)
        let orderNow = {
            name: name,
            phonenumber: phonenumber,
            date: date,
            address: address,
            status:"ORDERED",
            totalAmount:totalAmount,
            Payment:"Cash On Delivery",
            productDetails: product,
            email:loggedInEmail
        };
        console.log(orderNow)
        productService.order(orderNow).then(res => {
            toastr.success("Your order placed successfully");
            setTimeout(function(){
                window.location.reload();
            },1000)
          
            
            
        }).catch(err => {
            toastr.error("Order failed");
        });
    } catch (err) {
        // console.log(err.message);
    }
    const totalBillAmout = localStorage.getItem("TOTAL_BILL_AMOUNT");
document.querySelector("#totalAmount").value = totalBillAmout;
}


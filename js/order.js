loginCheck();
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
            totalAmount:totalAmount,
            productDetails: product,
            email:loggedInEmail
        };
        console.log(orderNow)
        productService.order(orderNow).then(res => {
            alert("your order successfully placed");
            
            window.location.href = "index.html";
        }).catch(err => {
            alert("order failed");
        });
    } catch (err) {
        console.log(err.message);
        alert(err.message);
    }
    const totalBillAmout = localStorage.getItem("TOTAL_BILL_AMOUNT");
document.querySelector("#totalAmount").value = totalBillAmout;
}


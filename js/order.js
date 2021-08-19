loginCheck();
let total=localStorage.getItem("TOTAL_BILL-AMOUNT");
    document.querySelector("#totalAmount").value=total;
function orderNow() {

    const name = document.querySelector("#userName").value;
    const phonenumber = document.querySelector("#phoneNumber").value;
    const date = document.querySelector("#date").value;
    const address = document.querySelector("#address").value;
     
    let product =JSON.parse(localStorage.getItem("cartElements"));
    
    
    event.preventDefault();

    // if (phonenumber.length != 10) {
    //     alert("mobile number must be 10 digit");
    // } else {
        try{
            OrderValidation.validate(name, phonenumber, date, address, product)
        let orderNow = {
            name: name,
            phonenumber: phonenumber,
            date: date,
            address: address,
            productDetails:product

        };  
       productService.order(orderNow).then(res => {
            alert("your order successfully placed");
            window.location.href = "index.html";
        }).catch(err => {
            alert("order failed");
        });
    }catch(err){
        console.log(err.message);
        alert(err.message);
    }
    
    }


const totalBillAmout = localStorage.getItem("TOTAL_BILL_AMOUNT");
document.querySelector("#totalAmount").value=totalBillAmout;

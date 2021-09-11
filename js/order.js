
let total = JSON.parse(localStorage.getItem("TOTAL_BILL-AMOUNT"));
document.querySelector("#totalAmount").value = total;
function orderNow() {
    const name = document.querySelector("#userName").value;
    const phonenumber = document.querySelector("#phoneNumber").value;
    const date = document.querySelector("#date").value;
    const address = document.querySelector("#address").value;
    let product = JSON.parse(localStorage.getItem("cartElements"));
    let user = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    let loggedInEmail = user != null ? user.email : null;
    event.preventDefault();

    try {
        if (product == null) {
            throw new Error("product is null")
        }
        OrderValidation.validate(name, phonenumber, date, address, total, product)
        let orderObj = {
            name: name,
            phonenumber: phonenumber,
            date: date,
            address: address,
            status: "ORDERED",
            totalAmount: total,
            Payment: "Cash On Delivery",
            productDetails: product,
            email: loggedInEmail
        };

        productService.order(orderObj).then(res => {
            console.log(JSON.stringify(res.data));
            let stockProduct = orderObj.productDetails;
            for (let productObj of stockProduct) {
                stockService.reduceStock(productObj.id, productObj.quantity).then(res => {
                    let data = res.data;
                    console.log(data);
                    localStorage.removeItem("cartElements");
                    toastr.success(ErrorMessage.ORDER_IS_SUCCESS);
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000)
                }).catch(err => {
                    toastr.error(ErrorMessage.ORDER_IS_FAILED);

                });
            }
        })
    } catch (err) {
        toastr.error(ErrorMessage.CATCH_ERROR)
        console.log(err.message);


    }
}


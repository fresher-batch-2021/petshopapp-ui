function orderNow(){
    alert("alert");
    const name= document.querySelector("#userName").value;
    const phonenumber= document.querySelector("#phoneNumber").value;
    const date= document.querySelector("#date").value;
    const address= document.querySelector("#address").nodeValue;
    event.preventDefault();
    alert(name);
    alert(phonenumber);
    alert("detials");
    if(phonenumber.length!=10){
        alert("mobile number must be 10 digit");
    } else{
    let orderNow={
        name:name,
        phonenumber:phonenumber,
        date:date,
        address:address
            };
            alert("object");

    const url="https://product-mock-api.herokuapp.com/orderapp/api/v1/orders?applicationName=giftshop";
alert("helo");
axios.post(url,orderNow).then(res =>{
    alert("your order successfully placed");
    window.location.href="index.html";
}).catch(err=>{
    alert("order failed");
});
alert("hh");
}

}

loginCheck();
function orderNow() {
    alert("alert");
    const name = document.querySelector("#userName").value;
    const phonenumber = document.querySelector("#phoneNumber").value;
    const date = document.querySelector("#date").value;
    const address = document.querySelector("#address").nodeValue;
    event.preventDefault();

    if (phonenumber.length != 10) {
        alert("mobile number must be 10 digit");
    } else {
        let orderNow = {
            name: name,
            phonenumber: phonenumber,
            date: date,
            address: address
        };
        const dbUsername = "apikey-v2-2809fxu62dw0lybt6awh1vn0jxt1srfscx9z33bhudjy";
          const dbPassword ="ff4e6d701676a004128c9bdb601b52d2";
          const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);

        const url = "https://f6c8119d-795e-4261-b941-ec3cbc9a4a29-bluemix.cloudantnosqldb.appdomain.cloud/petshop_order";
        alert("helo");
        axios.post(url, orderNow, { headers: {'Authorization': basicAuth }}).then(res => {
            alert("your order successfully placed");
            window.location.href = "index.html";
        }).catch(err => {
            alert("order failed");
        });
        alert("hh");
    }

}

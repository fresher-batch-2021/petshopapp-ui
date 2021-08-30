function loginForm() {
    event.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    console.log(email, password);
    try {
        LoginValidator.Validate(email, password)

        userService.login(email, password).then(res => {
            let data = res.data.docs;
            console.log(data);
            if (data.length == 0) {
                alert("invalid login credential");
            } else {
                const user = data[0];
                localStorage.setItem("LOGGED_IN_USER", JSON.stringify(user));
                localStorage.setItem("logIn", true);
                alert("successfully login");
                window.location.href = "index.html";
                let email=JSON.parse(localStorage.setItem("email"));

            }

        }).catch(err => {

            console.error(err.response.data);
            alert("unable to login");
        });
        

    } catch (err) {
        alert(err.message);
        console.log(err.message);
    }
}
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
                toastr.error(ErrorMessage.INVALID_CREDENTIALS);
            } else {
                const user = data[0];
                localStorage.setItem("LOGGED_IN_USER", JSON.stringify(user));
                localStorage.setItem("logIn", true);
                toastr.success(ErrorMessage.VALID_LOGIN);
                setTimeout(function () {
                    window.location.href = "index.html"
                }, 1000);


            }

        }).catch(err => {

            console.error(err.response.data);
            toastr.error(ErrorMessage.INVALID_LOGIN)
        });


    } catch (err) {
        toastr.error(err);
        console.log(err.message);
    }
}
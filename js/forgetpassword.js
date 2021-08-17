function forgetPassword() {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#psw").value;
    if (password.length < 8) {
        alert("password must be in 8 character");
    }
    else if(password!=confirmPassword){
        alert("password and confirm password is not matched")
    }
    else {
        const data = {
            "Email": email,
            "psw": password,
            "cpsw": confirmPassword
        }
        console.log(data);
        alert("password change successfully");
        window.location.href = "login.html";
    }
}
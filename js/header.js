function loggedIn() {
    let login = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    console.table(login)
    if (login.role!=null) {
        document.getElementById("user").innerHTML = `Welcome ${login.email}`;
    }
    let content = "";
    if (login.role!=null) {
        content = `
        <a class="navlinks" href="" onclick="logout()"><span style="font-size: 40px; color: white;"><i class="fa fa-sign-out" aria-hidden="true"></i></span></a>`;
    }
    else {
        content = `  
        <a class="navlinks" href="login.html"><span style="font-size: 40px; color: white;"><i class="fa fa-sign-in"
                                aria-hidden="true"></i></span></a>`;

    }
     document.querySelector("#navLinks").innerHTML = content;
}
function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}


function loginCheck() {
    if (JSON.parse(localStorage.getItem("LOGGED_IN_USER")) == null) {
        toastr.warning("Need to login first")
        setTimeout(function () {
            window.location.href = "login.html";
        }, 1000)

        return false;
    }
}
loggedIn();
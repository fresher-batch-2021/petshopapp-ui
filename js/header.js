function loggedIn() {
    let login = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    if (login == null || login == undefined) { login = false; }
    let content = "";
    if (login) {
        content = `<div class="tooltip">
        <a class="navlinks" href="" onclick="logout()"><span style="font-size: 55px; color: white;"><i class="fa fa-sign-out" aria-hidden="true"></i></span></a><div class="tooltiptext"> <p>Logout</p></div>
        </div>`;
    }
    else {
        content = `  <div class="tooltip">
        <a class="navlinks" href="login.html"><span style="font-size: 55px; color: white;"><i class="fa fa-sign-in"
                                aria-hidden="true"></i></span></a><div class="tooltiptext"> <p>Login</p></div>
                                </div>`;

    }
    document.querySelector(".navlinks").innerHTML = content;
}
function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}


function loginCheck() {
    if (JSON.parse(localStorage.getItem("LOGGED_IN_USER")) == null) {
        toastr.warning("Need to login first")
        setTimeout(function(){
            window.location.href = "login.html";
        },1000)
       
        return false;
    }
}
loggedIn();
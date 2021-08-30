function loggedIn() {
    let login = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    if (login == null || login == undefined) { login = false; }
    let content = "";
    if (login) {
        content = `
        <a class="navlinks" onclick="logout()"><span style="font-size: 40px; color: white;"><i class="fa fa-sign-out" aria-hidden="true"></i></span></a>`;
    }
    else {
        content = `
        <a class="navlinks" href="login.html"><span style="font-size: 40px; color: white;"><i class="fa fa-sign-in"
                                aria-hidden="true"></i></span></a>`;

    }
    document.querySelector(".navlinks").innerHTML = content;
}
function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}


function loginCheck() {
    if (JSON.parse(localStorage.getItem("LOGGED_IN_USER")) == null) {
        alert("Need to login first");
        window.location.href = "login.html";
        return false;
    }
}
loggedIn();
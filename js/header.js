let login=JSON.parse(localStorage.getItem("logIn"));
if(login==null||login==undefined){login=false;}
function logIn(){
    let content="";
    
    
    
    if(login){
        content=`
        <a class="navlinks" onclick="logout()"><span style="font-size: 40px; color: white;"><i class="fa fa-sign-out" aria-hidden="true"></i></span></a>`;
    }
    else{
        content=`
        <a class="navlinks" href="login.html"><span style="font-size: 40px; color: white;"><i class="fa fa-sign-in"
                                aria-hidden="true"></i></span></a>`;
        
    }
    document.querySelector(".navlinks").innerHTML=content;
}
function logout(){
    
    localStorage.setItem("logIn",JSON.stringify(false));
    localStorage.removeItem("cartElements");
    localStorage.removeItem("totalAmount");
    window.location.href="index.html";
}


function loginCheck(){
alert("yeswanth"+JSON.parse(localStorage.getItem("logIn")));
if(JSON.parse(localStorage.getItem("logIn"))==false){
alert("Need to login first");
window.location.href="login.html";
return false;
}
}
logIn();
var sign_in = document.getElementById("sign-in");
var reg = document.getElementById("register");
var slider = document.getElementById("button");

function register(){
    sign_in.style.left = "-350px";
    reg.style.left = "92px";
    slider.style.left = "110px";
}

function login(){
    sign_in.style.left = "90px";
    reg.style.left = "550px";
    slider.style.left = "0px";
}

function changeToHome(){
    window.open('main.html');
}
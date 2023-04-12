//-------------------------------------------CURSOR---------------------------------------
$(document).ready(function() {
    $(document).on('mousemove', function(e) {
        $('#circularCursor').css({
            left: e.pageX,
            top: e.pageY
        });
    })
});
//----------------------------------STYLING CSS DARK MODE--------------------------------

let body = document.getElementById("body");
let moon = document.getElementById("moon");
let html = document.getElementById("html")
let cursor = document.getElementById("circularCursor");
let logoTxt = document.getElementById("logo-text");
let loginBtn = document.getElementById("login");
let contactBtn = document.getElementById("contact");
let signup = document.getElementById("signup");
let slogan = document.getElementById("p-slogan");
let darkMode = false;

moon.addEventListener("click", function () {
    darkMode = !darkMode;
    if (darkMode) {
        body.classList.add("dark-mode");
        moon.classList.add("dark-mode-moon");
        html.classList.add(("dark-mode"));
        cursor.classList.add("dark-cursor");
        logoTxt.classList.add("logo-text-dark");
        contactBtn.classList.add("contact-dark", "contact-dark:hover");
        loginBtn.classList.add("login-dark", "login-dark:hover");
        signup.classList.add("signup-dark", "signup-dark:hover");
        slogan.classList.add("slogan-dark");

    } else {
        body.classList.remove("dark-mode");
        moon.classList.remove("dark-mode-moon");
        html.classList.remove(("dark-mode"));
        cursor.classList.remove("dark-cursor");
        logoTxt.classList.remove("logo-text-dark");
        contactBtn.classList.remove("contact-dark", "contact-dark:hover");
        loginBtn.classList.remove("login-dark", "login-dark:hover");
        signup.classList.remove("signup-dark", "signup-dark:hover");
        slogan.classList.remove("slogan-dark");
    }
})
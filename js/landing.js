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
let darkMode = false;

moon.addEventListener("click", function () {
    darkMode = !darkMode;
    if (darkMode) {
        body.classList.add("dark-mode");
        moon.classList.add("dark-mode-moon");
        html.classList.add(("dark-mode"));
        cursor.classList.add("dark-cursor");
        logoTxt.classList.add("logo-text-dark");
    } else {
        body.classList.remove("dark-mode");
        moon.classList.remove("dark-mode-moon");
        html.classList.remove(("dark-mode"));
        cursor.classList.remove("dark-cursor");
        logoTxt.classList.remove("logo-text-dark");

    }
})
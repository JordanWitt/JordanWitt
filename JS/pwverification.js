let myInput = document.getElementById("psw");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");

myInput.onfocus = function (){
    document.getElementById("message").style.display = "block";
}
// shows this field shows the message from the HTML on the PW sections
myInput.onblur = function (){
    document.getElementById("message").style.display = "none"
}
// hides the message box when user clicks away
myInput.onkeyup = function () {
    //validation for letters
    let lowerCase = /[a-z]/g
    if(myInput.value.match(lowerCase)){
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }


    //validate capital letters
    let upperCase = /[A-Z]/g
    if(myInput.value.match(upperCase)){
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    //validate numbers
}
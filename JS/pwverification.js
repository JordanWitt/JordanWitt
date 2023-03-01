let myInput = document.getElementById("psw");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");

myInput.onfocus = function (){
    document.getElementById("message").style.display = "block";
}
// shows this field shows the message from the HTML on the PW sections
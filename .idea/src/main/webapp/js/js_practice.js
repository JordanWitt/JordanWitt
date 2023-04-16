//javascript practice

let name = "jordan"
let noVowels = name.replace(/[aeiou]/gi, '')
console.log(noVowels);

let username = "jordierwitt"
let password = "HelloIamJordan!@"

function passwordCheck() {
    if (password.length < 10) {
        console.log("sorry, password not long enough");
    }
    else if(password === username){
        console.log("sorry you cannot have that as a password");
    }
    else if(password.match(/[a-zA-Z]/g).length < 20)
    {
        console.log("sorry not unique");
    }
    else {
        console.log("great password");
    }
}
passwordCheck();


